import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Music,
  Users,
  Mic,
  Camera,
  HeartHandshake,
  Star,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Musicians",
    icon: <Music className="w-12 h-12" />,
    description:
      "Professional musicians specializing in live bands, solo performances, and DJ services for all types of events.",
    count: "50+",
    href: "/artists/musicians",
    color: "from-purple-500 to-pink-500",
    features: ["Live Bands", "Solo Artists", "DJ Services", "Background Music"],
  },
  {
    name: "Dancers",
    icon: <Users className="w-12 h-12" />,
    description:
      "Talented dancers skilled in classical, folk, contemporary, and modern dance forms for cultural and entertainment events.",
    count: "30+",
    href: "/artists/dancers",
    color: "from-blue-500 to-cyan-500",
    features: ["Classical Dance", "Folk Dance", "Contemporary", "Choreography"],
  },
  {
    name: "Singers",
    icon: <Mic className="w-12 h-12" />,
    description:
      "Versatile singers specializing in playback, classical, devotional, and live singing for memorable performances.",
    count: "40+",
    href: "/artists/singers",
    color: "from-green-500 to-emerald-500",
    features: [
      "Playback Singing",
      "Classical Music",
      "Devotional Songs",
      "Live Concerts",
    ],
  },
  {
    name: "Comedians",
    icon: <Star className="w-12 h-12" />,
    description:
      "Professional comedians offering stand-up comedy, improv, and entertainment services to make your events memorable.",
    count: "25+",
    href: "/artists/comedians",
    color: "from-orange-500 to-red-500",
    features: ["Stand-up Comedy", "Improv Shows", "Corporate Entertainment"],
  },
  {
    name: "Photographers",
    icon: <Camera className="w-12 h-12" />,
    description:
      "Expert photographers specializing in event photography, portraits, and commercial shoots with creative excellence.",
    count: "30+",
    href: "/artists/photographers",
    color: "from-indigo-500 to-purple-500",
    features: [
      "Event Photography",
      "Portrait Sessions",
      "Commercial Shoots",
      "Video Services",
    ],
  },
  {
    name: "All Categories",
    icon: <HeartHandshake className="w-12 h-12" />,
    description: 
  "From grand weddings to high-profile corporate events, our professional hosts and emcees specialize in engaging audiences and creating unforgettable experiences tailored to every occasion.",
    count: "450+",
    href: "/artists/hosts",
    color: "from-pink-500 to-rose-500",
    features: [
  "Event Hosting",
  "Corporate Emcees",
  "Show Presenters",
  "Celebrity Management",
  "Wedding Anchors",
  "Product Launch Events",
  "Award Ceremonies",
  "Virtual Event Moderation",
  "Brand Promotions",
  "Live Concert Anchoring",
  "And many more"
],
  },
];

export default function Category() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Artist{" "}
              <span className="text-gradient bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Categories
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8">
              Discover talented artists across various categories. From
              musicians to photographers, find the perfect entertainment for
              your special event.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover-lift shadow-3d border-0 overflow-hidden h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <div
                        className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-3d group-hover:shadow-glow transition-shadow duration-300 flex-shrink-0`}
                      >
                        {category.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                            {category.name}
                          </h3>
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                          >
                            {category.count} Artists
                          </Badge>
                        </div>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {category.description}
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-2 mb-6">
                          {category.features.map((feature) => (
                            <div
                              key={feature}
                              className="text-sm text-gray-500 flex items-center gap-2"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              {feature}
                            </div>
                          ))}
                        </div>

                        {/* Action Button */}
                        <Button
                          className="btn-3d bg-gradient-brand hover:shadow-glow group-hover:scale-105 transition-transform duration-300"
                          asChild
                        >
                          <Link to={category.href}>
                            View Artists
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl lg:text-2xl mb-12 text-gray-200">
              Get in touch with our team and we'll help you find the perfect
              artist for your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="btn-3d bg-white text-primary hover:bg-gray-50 hover:shadow-glow font-semibold px-8 py-4"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4"
                asChild
              >
                <Link to="/artists">
                  Browse All Artists
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
