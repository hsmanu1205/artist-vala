import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Calendar, MapPin, User, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

interface BookingFormData {
  category: string;
  name: string;
  mobile: string;
  email: string;
  genre: string;
  event: string;
  date: string;
  locationType: string;
  location: string;
  budget: string;
}

const categories = [
  "COMEDIAN",
  "MUSICIAN",
  "SINGER",
  "DANCER",
  "PHOTOGRAPHER",
  "HOST",
  "MAGICIAN",
  "DJ",
  "BAND",
  "SOLO_ARTIST",
  "CLASSICAL_DANCER",
  "FOLK_DANCER",
  "BOLLYWOOD_SINGER",
  "GHAZAL_SINGER",
  "DEVOTIONAL_SINGER",
  "ROCK_BAND",
  "JAZZ_MUSICIAN",
  "CLASSICAL_MUSICIAN",
  "STAND_UP_COMEDIAN",
  "MIMICRY_ARTIST",
];

const genres = [
  "Classical",
  "Folk",
  "Bollywood",
  "Rock",
  "Jazz",
  "Pop",
  "Devotional",
  "Ghazal",
  "Qawwali",
  "Fusion",
  "Electronic",
  "Hip Hop",
];

const events = [
  "Wedding",
  "Birthday Party",
  "Corporate Event",
  "Anniversary",
  "Festival",
  "Concert",
  "Religious Ceremony",
  "Cultural Event",
  "Product Launch",
  "Conference",
];

const locationTypes = [
  "Indoor",
  "Outdoor",
  "Banquet Hall",
  "Hotel",
  "Resort",
  "Home",
  "Office",
  "Garden",
  "Beach",
  "Farmhouse",
];

const budgetRanges = [
  "Under ₹10,000",
  "₹10,000 - ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹2,50,000",
  "Above ₹2,50,000",
];

export default function InstantBooking() {
  const [formData, setFormData] = useState<BookingFormData>({
    category: "",
    name: "",
    mobile: "",
    email: "",
    genre: "",
    event: "",
    date: "",
    locationType: "",
    location: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast({
        title: "Booking Request Submitted!",
        description:
          "We'll contact you within 2 hours to confirm your booking.",
      });

      // Reset form
      setFormData({
        category: "",
        name: "",
        mobile: "",
        email: "",
        genre: "",
        event: "",
        date: "",
        locationType: "",
        location: "",
        budget: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: keyof BookingFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Instant{" "}
            <span className="text-gradient bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Booking
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Book your perfect artist in just a few clicks. Fill out the form
            below and get instant confirmation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="shadow-3d border-0 overflow-hidden">
            <CardHeader className="bg-gradient-brand text-white">
              <CardTitle className="text-2xl font-bold text-center">
                Book Your Live Artist
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Category, Name, Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Select Category
                    </Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) =>
                        updateFormData("category", value)
                      }
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category.replace(/_/g, " ")}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => updateFormData("name", e.target.value)}
                      placeholder="Enter Name Here"
                      className="h-12"
                      required
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="mobile"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Mobile Number
                    </Label>
                    <Input
                      id="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => updateFormData("mobile", e.target.value)}
                      placeholder="Enter Mobile Number"
                      className="h-12"
                      required
                    />
                  </div>
                </div>

                {/* Row 2: Email, Genre, Event */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      placeholder="Enter Email Here"
                      className="h-12"
                      required
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Genre
                    </Label>
                    <Select
                      value={formData.genre}
                      onValueChange={(value) => updateFormData("genre", value)}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select Genre" />
                      </SelectTrigger>
                      <SelectContent>
                        {genres.map((genre) => (
                          <SelectItem key={genre} value={genre}>
                            {genre}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Event
                    </Label>
                    <Select
                      value={formData.event}
                      onValueChange={(value) => updateFormData("event", value)}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select Event" />
                      </SelectTrigger>
                      <SelectContent>
                        {events.map((event) => (
                          <SelectItem key={event} value={event}>
                            {event}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Row 3: Date, Location Type, Location */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label
                      htmlFor="date"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Date
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => updateFormData("date", e.target.value)}
                      className="h-12"
                      required
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Location Type
                    </Label>
                    <Select
                      value={formData.locationType}
                      onValueChange={(value) =>
                        updateFormData("locationType", value)
                      }
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select Location Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {locationTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label
                      htmlFor="location"
                      className="text-sm font-medium text-gray-700 mb-2 block"
                    >
                      Location
                    </Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) =>
                        updateFormData("location", e.target.value)
                      }
                      placeholder="Enter Location Here"
                      className="h-12"
                      required
                    />
                  </div>
                </div>

                {/* Row 4: Budget */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Budget
                    </Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) => updateFormData("budget", value)}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select Budget" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map((range) => (
                          <SelectItem key={range} value={range}>
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 btn-3d bg-gradient-brand hover:shadow-glow text-white font-bold text-lg"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-brand rounded-full flex items-center justify-center shadow-3d">
              <User className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">Instant Response</h3>
            <p className="text-gray-600">Get confirmed within 2 hours</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-brand rounded-full flex items-center justify-center shadow-3d">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">Verified Artists</h3>
            <p className="text-gray-600">All artists are background checked</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-brand rounded-full flex items-center justify-center shadow-3d">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">Nationwide Service</h3>
            <p className="text-gray-600">Available across 50+ cities</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
