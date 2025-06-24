import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { apiService, type Artist } from "@/api";
import {
  Search,
  Star,
  MapPin,
  Music,
  Users,
  Mic,
  Camera,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  HeartHandshake,
  ArrowRight,
  Play,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Palette,
  Gamepad2,
  Trophy,
  Zap,
  Clock,
  Coffee,
  Headphones,
  Quote,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import VideoModal from "@/components/VideoModal";

interface CategoryCard {
  name: string;
  icon: React.ReactNode;
  description: string;
  count: string;
  href: string;
  color: string;
}

const categories: CategoryCard[] = [
  {
    name: "Singers",
    icon: <Mic className="w-6 h-6" />,
    description: "Professional vocalists for all occasions",
    count: "50+",
    href: "/artists/singers",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Musicians",
    icon: <Music className="w-6 h-6" />,
    description: "Instrumentalists and bands",
    count: "30+",
    href: "/artists/musicians",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Comedians",
    icon: <Quote className="w-6 h-6" />,
    description: "Stand-up and improv artists",
    count: "40+",
    href: "/artists/comedians",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Dancers",
    icon: <Palette className="w-6 h-6" />,
    description: "Traditional and contemporary performers",
    count: "35+",
    href: "/artists/dancers",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "DJs",
    icon: <Headphones className="w-6 h-6" />,
    description: "Electronica and party specialists",
    count: "25+",
    href: "/artists/djs",
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "Explore All Categories",
    icon: <Camera className="w-6 h-6" />,
    description: "Let's See Our Artists Collection",
    count: "450+",
    href: "/artists",
    color: "from-yellow-500 to-amber-500",
  },
];

const features = [
  {
    title: "Instant Booking",
    description: "Confirm artists in minutes with our streamlined process",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Verified Artists",
    description: "All performers are background-checked and reviewed",
    icon: <CheckCircle className="w-6 h-6" />,
  },
  {
    title: "Flexible Pricing",
    description: "Options for every budget without hidden charges",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    title: "24/7 Support",
    description: "Our team is always available to assist you",
    icon: <Clock className="w-6 h-6" />,
  },
];

const clientLogos = [
  {
    name: "Trent",
    logo: "https://companieslogo.com/img/orig/TRENT.NS_BIG-18d1f0ac.png?t=1721197936",
    url: "#",
  },
  {
    name: "University Of Delhi",
    logo: "https://live.staticflickr.com/7361/9508753866_b5f71db58b.jpg",
    url: "#",
  },
  {
    name: "Infosys",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1200px-Infosys_logo.svg.png",
    url: "#",
  },
  {
    name: "Taj Hotel",
    logo: "https://e7.pngegg.com/pngimages/415/792/png-clipart-logo-taj-hotels-resorts-and-palaces-brand-font-taj-logo-text-logo.png",
    url: "#",
  },
  {
    name: "DPS",
    logo: "https://www.postoast.com/wp-content/uploads/2019/07/motto-of-Delhi-Public-School-Service-Before-Self.jpg",
    url: "#",
  },
  {
    name: "Ramada",
    logo: "https://vectorseek.com/wp-content/uploads/2023/07/Ramada-by-Wyndham-Logo-Vector.svg-.png",
    url: "#",
  },
];

const reviews = [
  {
    name: "Rahul Sharma",
    role: "Wedding Planner, Mumbai",
    content:
      "Artist Vaala made our wedding events spectacular! Their singers and dancers had everyone on their feet. The booking process was so smooth compared to traditional methods.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Corporate HR, Delhi",
    content:
      "For our annual conference, we booked a stand-up comedian through Artist Vaala. The entire office is still talking about the performance! Will definitely use them again.",
    rating: 4,
  },
  {
    name: "Arjun Kapoor",
    role: "Event Manager, Bangalore",
    content:
      "As someone who organizes 50+ events yearly, I can confidently say Artist Vaala has the best collection of verified artists. Their support team is extremely responsive.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    role: "Private Client, Hyderabad",
    content:
      "Booked a classical singer for my mother's 60th birthday. The artist arrived on time, performed beautifully, and made the occasion truly special. Worth every rupee!",
    rating: 5,
  },
];

export default function Index() {
  const [featuredArtists, setFeaturedArtists] = useState<Artist[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentReview, setCurrentReview] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    loadFeaturedArtists();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const loadFeaturedArtists = async () => {
    try {
      const artists = await apiService.getArtists();
      setFeaturedArtists(artists.slice(0, 4));
    } catch (error) {
      console.error("Failed to load featured artists:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative mb-8">
        <div className="overflow-hidden w-full">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
            className="flex whitespace-nowrap"
            style={{ willChange: "transform" }}
          >
            {Array(2)
              .fill(
                <span className="mx-4 text-base sm:text-lg font-semibold tracking-wide text-gradient bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent uppercase">
                  Welcome to Artist Vaala — Curated by Scom Experiences Pvt.
                  Ltd., Where Talent Meets Opportunity!
                </span>,
              )
              .map((el, i) => (
                <React.Fragment key={i}>{el}</React.Fragment>
              ))}
          </motion.div>
        </div>
      </div>
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 w-full h-full">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200')",
            }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-indigo-900/50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float-delay"></div>

        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg">
                <span className="inline-block animate-gradient-x bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Book Your
                </span>
                <span className="block text-gradient bg-gradient-to-r from-orange-300 to-pink-400 bg-clip-text text-transparent">
                  Live Artist
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200">
                Anywhere. Anytime. Any Budget.
              </p>

              <div className="mb-8 text-center">
                <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-4 text-gradient bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Artist Vaala
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300">
                  Your Premier Entertainment Booking Platform
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="btn-3d bg-gradient-brand hover:shadow-glow text-lg px-6 sm:px-8 py-4"
                  asChild
                >
                  <Link to="/instant-booking">Instant Booking</Link>
                </Button>

                <Button
                  size="lg"
                  className="btn-3d bg-white/20 border-2 border-white text-white hover:bg-white hover:text-primary hover:shadow-glow text-lg px-6 sm:px-8 py-4"
                  onClick={() => setIsVideoModalOpen(true)}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 text-center"
            >
              {[
                {
                  value: 2000,
                  label: "Bookings",
                  gradient: "from-purple-400 to-pink-400",
                },
                {
                  value: 1500,
                  label: "Live Entertainers",
                  gradient: "from-blue-400 to-cyan-400",
                },
                {
                  value: 50,
                  label: "Cities",
                  gradient: "from-green-400 to-emerald-400",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="glass p-4 sm:p-6 rounded-xl hover-lift transition-all duration-300"
                >
                  <AnimatedCounter
                    target={stat.value}
                    suffix="+"
                    className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gradient bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                  />
                  <div className="text-gray-300 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        {/* Disco background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
          <div
            className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500 rounded-full filter blur-[80px] opacity-20 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-0 left-1/2 w-72 h-72 bg-blue-500 rounded-full filter blur-[90px] opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              Popular{" "}
              <span className="text-gradient bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Categories
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-purple-200 max-w-2xl mx-auto"
            >
              Discover the perfect artist for your next event
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group perspective-1000"
              >
                <Link to={category.href}>
                  <Card className="h-full bg-gray-900 border border-gray-800/50 hover:border-purple-400/30 transition-all duration-300 group-hover:shadow-[0_0_20px_-5px] group-hover:shadow-purple-500/30">
                    <CardContent className="p-6 relative overflow-hidden">
                      {/* Animated background elements */}
                      <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-500/10 rounded-full filter blur-[60px] group-hover:opacity-40 transition-opacity duration-500"></div>

                      <div className="relative z-10">
                        <div
                          className={`w-14 h-14 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-6 group-hover:rotate-[15deg] transition-transform duration-300 shadow-[0_0_15px] shadow-purple-500/30`}
                        >
                          {category.icon}
                        </div>

                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                          {category.name}
                        </h3>

                        <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                          {category.description}
                        </p>

                        <div className="flex justify-between items-center">
                          <Badge
                            variant="outline"
                            className="border-gray-700 bg-gray-800/50 text-gray-300 group-hover:border-purple-400/50 group-hover:text-purple-200 transition-colors duration-300"
                          >
                            {category.count} Artists
                          </Badge>

                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            }}
                            className="flex items-center"
                          >
                            <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors duration-300" />
                            <span className="ml-1 text-sm text-gray-400 group-hover:text-purple-300 transition-colors duration-300">
                              Explore
                            </span>
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Disco ball animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute -top-20 -right-20 w-40 h-40 z-0 pointer-events-none"
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black"></div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Categories Section Ended*/}

      {/* Featured Performances Section */}
      <section className="py-16 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full filter blur-3xl opacity-20 animate-float-delay"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Featured{" "}
              <span className="text-gradient bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Performances
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Experience the magic of our top-rated artists in action
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Live Concert",
                artist: "The Midnight Vibes",
                image:
                  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800",
                views: "1.2M",
                rating: 4.9,
              },
              {
                title: "DJ Set",
                artist: "DJ Neon Pulse",
                image:
                  "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=800",
                views: "850K",
                rating: 4.8,
              },
              {
                title: "Stand-up Comedy",
                artist: "Rahul Laughs",
                image:
                  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
                views: "650K",
                rating: 4.7,
              },
              {
                title: "Magic Show",
                artist: "Wizard Wonders",
                image:
                  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800",
                views: "720K",
                rating: 4.9,
              },
            ].map((performance, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img
                  src={performance.image}
                  alt={performance.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-white font-bold text-xl">
                        {performance.title}
                      </h3>
                      <p className="text-gray-300">{performance.artist}</p>
                    </div>
                    <div className="flex items-center bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                      <span className="text-white text-sm">
                        {performance.rating}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-gray-300 text-sm flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {performance.views} views
                    </span>
                    <a
                      href="http://localhost:8080/instant-booking"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-glow transform transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_-5px] hover:shadow-purple-500/50 active:translate-y-0 active:shadow-[0_5px_10px_-3px] active:shadow-purple-500/30"
                      >
                        Book Now
                      </Button>
                    </a>
                  </div>
                </div>
                <div className="absolute -bottom-1 left-0 w-full h-2 bg-gradient-to-t from-purple-500/30 to-transparent"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-b from-white to-indigo-50 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-200 rounded-full filter blur-3xl opacity-20"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              How{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                It Works
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Book your perfect artist in just 3 simple steps
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Browse & Select",
                description:
                  "Explore our diverse collection of talented artists and performers",
                icon: <Search className="w-8 h-8" />,
                color: "from-purple-500 to-indigo-500",
              },
              {
                step: "2",
                title: "Customize Booking",
                description:
                  "Choose your preferred date, time, and performance details",
                icon: <CheckCircle className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500",
              },
              {
                step: "3",
                title: "Confirm & Enjoy",
                description:
                  "Secure your booking and get ready for an unforgettable experience",
                icon: <Sparkles className="w-8 h-8" />,
                color: "from-pink-500 to-rose-500",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-white rounded-2xl shadow-lg transform rotate-1 -z-10"></div>
                <div className="absolute inset-0 bg-white rounded-2xl shadow-lg transform -rotate-1 -z-10"></div>

                <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white mb-6 mx-auto`}
                  >
                    {item.icon}
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-sm font-semibold mb-2 text-gradient bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                    >
                      STEP {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-200 transition-all duration-300 pointer-events-none"></div>
                </div>

                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-1 bg-gray-200"></div>
                    <div className="absolute top-1/2 right-0 w-4 h-4 border-t-2 border-r-2 border-gray-300 transform rotate-45 -translate-y-1/2"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Button
              size="lg"
              className="btn-3d bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-glow text-lg px-8 py-6"
              asChild
            >
              <Link to="/artists">
                Browse All Artists <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Why Choose{" "}
              <span className="text-gradient bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Artist Vaala
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              The trusted platform for artists and clients alike
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Trusted by India's leading brands
            </h3>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="h-12 flex items-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-purple-900 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl opacity-20"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              What Our{" "}
              <span className="text-gradient bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Clients Say
              </span>
            </motion.h2>
          </div>

          <div className="max-w-4xl mx-auto relative h-64">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: currentReview === index ? 1 : 0,
                  zIndex: currentReview === index ? 10 : 0,
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg ${currentReview === index ? "block" : "hidden"}`}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <Quote className="w-8 h-8 text-purple-300 mb-4 opacity-50" />
                    <p className="text-lg mb-6">{review.content}</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                        />
                      ))}
                    </div>
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-purple-200 text-sm">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentReview === index ? "bg-white w-6" : "bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Book Your Artist?
            </h2>
            <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who found their perfect
              performer through Artist Vaala
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 hover:shadow-glow text-lg px-8 py-6"
                asChild
              >
                <Link to="/instant-booking">Get Started Now</Link>
              </Button>
              <Button
                size="lg"
                className="btn-3d bg-white/20 border-2 border-white text-white hover:bg-white hover:text-primary hover:shadow-glow text-lg px-6 sm:px-8 py-4"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
}
