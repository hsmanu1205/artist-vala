import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import BookingModal from "@/components/BookingModal";
import { apiService, type Artist } from "@/api";
import {
  Star,
  MapPin,
  Calendar,
  Users,
  Award,
  CheckCircle,
  Clock,
  Heart,
  Share2,
  Phone,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ArtistDetail() {
  const { id } = useParams<{ id: string }>();
  const [artist, setArtist] = useState<Artist | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (id) {
      loadArtist(id);
    }
  }, [id]);

  const loadArtist = async (artistId: string) => {
    setIsLoading(true);
    try {
      // For demo purposes, we'll get from the mock data
      const artists = await apiService.getArtists();
      const foundArtist = artists.find((a) => a.id === artistId);
      setArtist(foundArtist || null);
    } catch (error) {
      console.error("Failed to load artist:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Skeleton className="aspect-square rounded-2xl" />
            </div>
            <div>
              <Skeleton className="h-8 w-3/4 mb-4" />
              <Skeleton className="h-4 w-1/2 mb-6" />
              <Skeleton className="h-20 w-full mb-6" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!artist) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artist Not Found</h1>
          <p className="text-gray-600 mb-8">
            The artist you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <a href="/artists">Browse All Artists</a>
          </Button>
        </div>
      </div>
    );
  }

  // Mock additional images for gallery
  const galleryImages = [
    artist.image,
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600",
    "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=600",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-3d">
                  <img
                    src={galleryImages[selectedImage]}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {galleryImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index
                          ? "border-primary"
                          : "border-transparent"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${artist.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Artist Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl lg:text-5xl font-bold">
                    {artist.name}
                  </h1>
                  {artist.availability && (
                    <Badge className="bg-green-100 text-green-700">
                      Available
                    </Badge>
                  )}
                </div>
                <p className="text-xl text-gray-600 mb-4">{artist.category}</p>

                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-lg">
                      {artist.rating}
                    </span>
                    <span className="text-gray-500">
                      ({artist.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">{artist.city}</span>
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {artist.description}
                </p>

                {/* Pricing */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-6">
                  <h3 className="font-semibold text-lg mb-2">Pricing</h3>
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-bold text-primary">
                      ₹{artist.price.min.toLocaleString()}
                    </div>
                    <div className="text-gray-500">
                      - ₹{artist.price.max.toLocaleString()}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Price varies based on event type and duration
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="btn-3d bg-gradient-brand hover:shadow-glow flex-1"
                    onClick={() => setIsBookingModalOpen(true)}
                  >
                    Book Now
                  </Button>
                  <Button size="lg" variant="outline" className="btn-3d">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="btn-3d">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Skills & Experience */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-3d border-0 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary" />
                    Skills & Expertise
                  </h3>
                  <div className="space-y-4">
                    {artist.skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="font-semibold">Experience</span>
                    </div>
                    <p className="text-gray-600">{artist.experience} years</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-3d border-0 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Users className="w-6 h-6 text-primary" />
                    Languages
                  </h3>
                  <div className="space-y-3">
                    {artist.languages.map((language) => (
                      <Badge
                        key={language}
                        variant="secondary"
                        className="mr-2 mb-2 px-4 py-2 text-sm bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        {language}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-semibold">Availability</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm">
                          Available for immediate booking
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Responds within 2 hours</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-3d border-0 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600 mb-6">
                      Have questions? Get in touch directly or book instantly
                      through our platform.
                    </p>

                    <Button
                      variant="outline"
                      className="w-full justify-start gap-3 py-3"
                    >
                      <Phone className="w-5 h-5" />
                      Call Now
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full justify-start gap-3 py-3"
                    >
                      <Mail className="w-5 h-5" />
                      Send Message
                    </Button>

                    <div className="mt-8 pt-6 border-t">
                      <h4 className="font-semibold mb-3">
                        Why Book Through Us?
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Verified & Background Checked
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Secure Payment Protection
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          24/7 Customer Support
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Free Cancellation Policy
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Book {artist.name}?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Don't wait! Popular artists get booked quickly. Secure your date
              now and make your event unforgettable.
            </p>
            <Button
              size="lg"
              className="btn-3d bg-white text-primary hover:bg-gray-50 hover:shadow-glow font-semibold px-12 py-4 text-lg"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Book {artist.name} Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        artistName={artist.name}
        category={artist.category}
      />
    </div>
  );
}
