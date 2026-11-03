import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import logoAsset from '@/assets/branding/logo.png.asset.json';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" aria-label="Ivorymyrrh home" className="group">
              <div>
                <img
                  src="https://res.cloudinary.com/titznrnk/image/upload/v1793674519/Logo.png"
                  alt="Ivorymyrrh"
                  width={203}
                  height={109}
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted partner for premium agricultural produce and professional meat processing services.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Products', path: '/products' },
                { name: 'Get a Quote', path: '/get-quote' },
                { name: 'Book Service', path: '/service-booking' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Our Products</h3>
            <ul className="space-y-3">
              {['Fresh Tomatoes', 'Pepper', 'Onions', 'Potatoes', 'Yam', 'Fish', 'Dried Fish', 'Goat Meat', 'Rice', 'Beans', 'Garri', 'Palm Oil'].map((product) => (
                <li key={product}>
                  <Link
                    to="/products"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">
                  1 Uleaviu Golden Street, Selewu Teacher Quarter, Igbogbo, Ikorodu, Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+2347051712618" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    070 5171 2618 (WhatsApp)
                  </a>
                  <a href="tel:09156535430" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    091 5653 5430
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand shrink-0" />
                <a href="mailto:ivorymyrrhresources81@gmail.com" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  ivorymyrrhresources81@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ivorymyrrh Resources Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
