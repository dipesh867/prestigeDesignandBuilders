
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img
              src="/lovable-uploads/a987861c-be99-4449-b7bd-a8efc95d3c70.png"
              alt="Prestige Design and Builders"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Premium construction and design company specializing in steel and iron structures. 
              We deliver exceptional quality and innovative solutions for residential, commercial, and industrial projects.
            </p>
            <p className="gold-text font-playfair text-lg italic">
              "Designing at its Best"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 gold-text">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/what-we-build" className="text-gray-300 hover:text-gold-400 transition-colors">
                  What We Build
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 gold-text">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="text-gold-400 mr-3" size={18} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-gold-400 mr-3" size={18} />
                <span className="text-gray-300">info@prestigebuilders.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="text-gold-400 mr-3 mt-1" size={18} />
                <span className="text-gray-300">
                  123 Construction Ave<br />
                  Building City, BC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Button Section */}
        <div className="text-center py-8 border-t border-b border-charcoal-700 mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your <span className="gold-text">Dream Project</span>?
          </h3>
          <button className="bg-gold-gradient text-charcoal-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gold-gradient-hover hover:shadow-2xl hover:transform hover:scale-105">
            Get Free Quote
          </button>
        </div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
          
          <p className="text-gray-400 text-sm">
            © 2024 Prestige Design and Builders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
