import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Target,
  Heart,
  Award,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Excellence",
    description: "We strive for perfection in every booking and performance",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Passion",
    description: "Our love for entertainment drives everything we do",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community",
    description: "Building connections between artists and event organizers",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Quality",
    description: "Only verified, professional artists make it to our platform",
  },
];

const stats = [
  { number: "2000+", label: "Events Completed" },
  { number: "1500+", label: "Verified Artists" },
  { number: "50+", label: "Cities Covered" },
  { number: "4.8", label: "Average Rating" },
];

export default function About() {
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
              About{" "}
              <span className="text-gradient bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Artist Vaala
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8">
              Managed by Scom Experience Pvt. Ltd., we're India's premier
              platform for booking live entertainment that creates unforgettable
              experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="btn-3d bg-gradient-brand hover:shadow-glow"
                asChild
              >
                <Link to="/artists">
                  Explore Artists
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="btn-3d" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-gradient bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Artist Vaala was born from a simple yet powerful vision: to make
                booking live entertainment as easy as ordering food online.
                Managed by Scom Experience Pvt. Ltd., we recognized the gap
                between talented artists seeking opportunities and event
                organizers looking for the perfect entertainment.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Since our inception, we've connected thousands of artists with
                event organizers across India, creating memorable experiences
                that bring people together. Our platform ensures that every
                booking is seamless, secure, and satisfying for both parties.
              </p>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Verified Artists Only</h4>
                  <p className="text-gray-600">
                    Every artist on our platform undergoes thorough background
                    verification and skill assessment.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-3d">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4035975.jpg&f=1&nofb=1&ipt=23630edb2f042b419c65b844aeea88d7de4082f213540d457b3c0693ee0248ac"
                  alt="Live performance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-brand rounded-2xl flex items-center justify-center text-white shadow-3d">
                <div className="text-center">
                  <Star className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">5-Star</div>
                  <div className="text-xs">Service</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do at Artist Vaala and
              shape our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift shadow-3d border-0 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-brand rounded-2xl flex items-center justify-center text-white shadow-3d">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl lg:text-2xl mb-12 text-gray-200">
              To democratize live entertainment by connecting talented artists
              with event organizers, making every celebration more vibrant and
              memorable across India.
            </p>
            <Button
              size="lg"
              className="btn-3d bg-white text-primary hover:bg-gray-50 hover:shadow-glow font-semibold px-8 py-4"
              asChild
            >
              <Link to="https://chat.whatsapp.com/ExampleCommunityLink">Join Our Community</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
