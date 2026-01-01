import { Scale } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary py-16">
      <div className="container-narrow">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-8 h-8 text-gold" />
              <div>
                <span className="font-serif text-xl font-semibold text-primary-foreground">
                  Nengwekhulu
                </span>
                <span className="block text-xs tracking-[0.2em] text-primary-foreground/60 uppercase">
                  Attorneys Inc.
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed max-w-sm">
              Distinguished legal practitioners committed to justice, integrity, and 
              uncompromising excellence in South African law.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Practice Areas</h4>
            <ul className="space-y-2">
              <li>
                <a href="#practice-areas" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  Criminal Law
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  Civil Litigation
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  Family Law
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  Property Law
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/70">
                123 Justice Avenue, Sandton
              </li>
              <li className="text-primary-foreground/70">
                Johannesburg, 2196
              </li>
              <li>
                <a href="tel:+27123456789" className="text-primary-foreground/70 hover:text-gold transition-colors">
                  +27 12 345 6789
                </a>
              </li>
              <li>
                <a href="mailto:info@nengwekhulu.co.za" className="text-primary-foreground/70 hover:text-gold transition-colors">
                  info@nengwekhulu.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Nengwekhulu Attorneys Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
