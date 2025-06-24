import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  HeartHandshake,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  inquiryType: string;
}

const inquiryTypes = [
  "General Inquiry",
  "Artist Booking",
  "Partnership",
  "Technical Support",
  "Complaint/Feedback",
  "Other",
];

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    details: "+91 9876543210",
    subtitle: "Mon-Sat 9AM-8PM",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    details: "info@artistvaala.com",
    subtitle: "24/7 Response",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Office",
    details: "Bangalore, Karnataka",
    subtitle: "India",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Hours",
    details: "Mon-Sat 9AM-8PM",
    subtitle: "Sunday Closed",
  },
];

const features = [
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "24/7 Support",
    description: "Round-the-clock customer service for all your needs",
  },
  {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: "Personal Touch",
    description: "Dedicated relationship manager for enterprise clients",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Expert Guidance",
    description: "Professional consultation for event planning",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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
              Get in{" "}
              <span className="text-gradient bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8">
              Have questions about booking artists or need help planning your
              event? We're here to help you create unforgettable experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift shadow-3d border-0 text-center h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-brand rounded-2xl flex items-center justify-center text-white shadow-3d">
                      {info.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                    <p className="text-lg font-semibold text-gray-900 mb-1">
                      {info.details}
                    </p>
                    <p className="text-sm text-gray-500">{info.subtitle}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-3d border-0">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            updateFormData("name", e.target.value)
                          }
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            updateFormData("phone", e.target.value)
                          }
                          placeholder="+91 7375855205"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          updateFormData("email", e.target.value)
                        }
                        placeholder="info@scomexp.com"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Inquiry Type</Label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={(value) =>
                            updateFormData("inquiryType", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            {inquiryTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) =>
                            updateFormData("subject", e.target.value)
                          }
                          placeholder="Message subject"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          updateFormData("message", e.target.value)
                        }
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-3d bg-gradient-brand hover:shadow-glow text-lg py-3"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <Card className="shadow-3d border-0">
  <CardContent className="p-0">
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
      <div className="text-center p-4">
        <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <p className="text-sm text-gray-500 mt-2">
          Scom Experiences Pvt. Ltd. Procapitus Business Park, Sector 63
          Noida, 201301, Uttar Pradesh, India
        </p>
      </div>

      {/* Embedded Google Map */}
      <div className="w-full h-72">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9593464382115!2d77.38234969999999!3d28.6309805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef7a2841386b%3A0x76234340151074f1!2sProcapitus%20Business%20Park!5e0!3m2!1sen!2sin!4v1750671718702!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
        ></iframe>
      </div>
    </div>
  </CardContent>
</Card>


              {/* Features */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center text-white shadow-3d flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Quick answers to common questions about our services
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <Card className="shadow-3d border-0">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">
                    How do I book an artist?
                  </h3>
                  <p className="text-gray-600">
                    Simply browse our artists, click "Book Now" on any profile,
                    fill out the booking form, and we'll connect you within 2
                    hours.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-3d border-0">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">
                    Are all artists verified?
                  </h3>
                  <p className="text-gray-600">
                    Yes, every artist undergoes thorough background verification
                    and skill assessment before joining our platform.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-3d border-0">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">
                    What's your cancellation policy?
                  </h3>
                  <p className="text-gray-600">
                    We offer flexible cancellation with full refund up to 48
                    hours before the event. Terms may vary by artist.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-3d border-0">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">
                    Do you provide equipment?
                  </h3>
                  <p className="text-gray-600">
                    Equipment availability varies by artist. Most come with
                    basic equipment, but specific requirements can be discussed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
