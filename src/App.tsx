import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Category from "@/pages/Category";
import Artists from "@/pages/Artists";
import ArtistDetail from "@/pages/ArtistDetail";
import Contact from "@/pages/Contact";
import InstantBooking from "@/pages/InstantBooking";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/category" element={<Category />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/artists/all" element={<Artists />} />
              <Route path="/artists/:category" element={<Artists />} />
              <Route path="/artist/:id" element={<ArtistDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/instant-booking" element={<InstantBooking />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">AV</span>
                    </div>
                    <div>
                      <div className="text-xl font-bold">Artist Vaala</div>
                      <div className="text-xs text-gray-400">
                        by Scom Experience
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Your trusted platform for booking live entertainment across
                    India. Making every event memorable.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <a
                        href="/"
                        className="hover:text-white transition-colors"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        className="hover:text-white transition-colors"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="/artists"
                        className="hover:text-white transition-colors"
                      >
                        Artists
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contact"
                        className="hover:text-white transition-colors"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Categories</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <a
                        href="/artists/musicians"
                        className="hover:text-white transition-colors"
                      >
                        Musicians
                      </a>
                    </li>
                    <li>
                      <a
                        href="/artists/dancers"
                        className="hover:text-white transition-colors"
                      >
                        Dancers
                      </a>
                    </li>
                    <li>
                      <a
                        href="/artists/singers"
                        className="hover:text-white transition-colors"
                      >
                        Singers
                      </a>
                    </li>
                    <li>
                      <a
                        href="/artists/comedians"
                        className="hover:text-white transition-colors"
                      >
                        Comedians
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Contact Info</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>Phone: +91 9876543210</li>
                    <li>Email: info@artistvaala.com</li>
                    <li>Address: Bangalore, India</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                <p>
                  © 2024 Artist Vaala by Scom Experience Pvt. Ltd. All rights
                  reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
