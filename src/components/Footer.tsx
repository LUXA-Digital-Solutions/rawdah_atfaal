import { BookOpen, Heart, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/rawdah_logo2.jpg"
                alt="Rawdah Logo"
                className="w-10 h-10 rounded-xl shadow-soft"
              />
              <span className="text-2xl font-bold text-primary">Rawdah</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Helping children learn Qur'an and Hadith with love, guidance, and
              authentic Islamic education.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200"
              >
                About Us
              </Link>
              <Link
                to="/quran"
                className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200"
              >
                Qur'an Program
              </Link>
              <Link
                to="/hadith"
                className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200"
              >
                Hadith Program
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Support</h3>
            <div className="space-y-2">
              <Link
                to="/faq"
                className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200"
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200"
              >
                Contact Us
              </Link>
              <a
                href="https://calendly.com/markazulbayaan9"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200"
              >
                Schedule Trial
              </a>
              <a
                href="https://bit.ly/rawdah-director"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200"
              >
                Enrollment
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>markazulbayaan9@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+2348089287065</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Online Learning Platform</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>
            &copy; 2024 Rawdah Education. All rights reserved. | Teaching with
            Islamic values and modern methods.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
