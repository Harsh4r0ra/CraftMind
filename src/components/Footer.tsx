import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.6rem] holographic-text">
              CRAFTMIND
            </h3>
            <p className="text-sm text-soft">
              Custom CRM, ERP, and workflow automation systems for companies still running on spreadsheets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-soft transition-smooth hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-soft transition-smooth hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-soft transition-smooth hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-soft transition-smooth hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-soft transition-smooth hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-soft transition-smooth hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Services</h4>
            <ul className="space-y-3 text-sm text-soft">
              <li>
                <Link to="/services" className="transition-smooth hover:text-foreground">
                  CRM Systems
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-smooth hover:text-foreground">
                  ERP Systems
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-smooth hover:text-foreground">
                  Workflow Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Get in Touch</h4>
            <address className="not-italic space-y-4 text-sm text-soft">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-cesta-electric" aria-hidden="true" />
                <a href="mailto:harsharora.work@gmail.com" className="transition-smooth hover:text-foreground">
                  harsharora.work@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-cesta-gold" aria-hidden="true" />
                <a href="tel:+919136474511" className="transition-smooth hover:text-foreground">
                  +91 9136474511
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-cesta-purple" aria-hidden="true" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-border pt-10 text-sm text-soft md:flex-row md:gap-4">
          <p>
            © {currentYear} CraftMind. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
