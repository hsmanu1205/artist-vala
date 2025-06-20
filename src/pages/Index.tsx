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
  // ... (keep your existing categories array)
];

const features = [
  // ... (keep your existing features array)
];

const clientLogos = [
  // ... (keep your existing clientLogos array)
];

const reviews = [
  // ... (keep your existing reviews array)
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
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        {/* Background Elements */}
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
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl [animation-delay:1s]"></div>

        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Book Your
                <span className="block text-gradient bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
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

            {/* Right Stats - Improved Mobile Responsiveness */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 text-center"
            >
              {[
                { value: 2000, label: "Bookings", gradient: "from-purple-400 to-pink-400" },
                { value: 1500, label: "Live Entertainers", gradient: "from-blue-400 to-cyan-400" },
                { value: 50, label: "Cities", gradient: "from-green-400 to-emerald-400" }
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

      {/* ... (keep all your existing sections exactly as they are) ... */}

      {/* Enhanced 3D Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-6 px-4 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo/Company */}
            <div className="flex flex-col items-start">
              <motion.div 
                whileHover={{ y: -5 }}
                className="mb-4"
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Artist Vaala
                </h2>
                <p className="text-gray-400 mt-2">Your Premier Entertainment Booking Platform</p>
              </motion.div>
              
              <div className="flex space-x-4 mt-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <motion.a
                    key={social}
                    whileHover={{ y: -3, scale: 1.1 }}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r from-purple-500 to-pink-500">
                      <span className="text-xs">{social[0].toUpperCase()}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            {['Company', 'Services', 'Legal', 'Contact'].map((section) => (
              <motion.div 
                key={section}
                whileHover={{ y: -5 }}
                className="flex flex-col"
              >
                <h3 className="text-lg font-semibold mb-4">{section}</h3>
                <div className="space-y-2">
                  {['About', 'Blog', 'Careers'].map((item) => (
                    <a 
                      key={item} 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-6"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} Artist Vaala. All rights reserved.</p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Contact Us'].map((item) => (
                <a 
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
}