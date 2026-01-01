import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-sm tracking-[0.2em] text-gold uppercase font-medium mb-4 block">
              Contact Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              Begin Your Legal Journey
            </h2>
            <div className="w-20 h-1 bg-gold mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Every legal matter begins with a conversation. Reach out to us for a confidential 
              consultation and discover how we can protect your interests and secure your future.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Office Address</h4>
                  <p className="text-muted-foreground">
                    123 Justice Avenue, Sandton<br />
                    Johannesburg, Gauteng 2196
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">
                    <a href="tel:+27123456789" className="hover:text-gold transition-colors">+27 12 345 6789</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@nengwekhulu.co.za" className="hover:text-gold transition-colors">
                      info@nengwekhulu.co.za
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                  <p className="text-muted-foreground">
                    Monday – Friday: 8:00 AM – 5:00 PM<br />
                    Saturday: By Appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background border border-border p-8 lg:p-10 shadow-lg">
            <h3 className="font-serif text-2xl text-foreground mb-6">
              Request a Consultation
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-gold transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-gold transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-gold transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-gold transition-colors"
                  placeholder="+27 XX XXX XXXX"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Legal Matter
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="">Select a practice area</option>
                  <option value="criminal">Criminal Law</option>
                  <option value="civil">Civil Litigation</option>
                  <option value="family">Family Law</option>
                  <option value="property">Property Law</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Brief Description
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Please provide a brief overview of your legal matter..."
                />
              </div>

              <Button variant="hero" size="xl" className="w-full group">
                Submit Inquiry
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                All consultations are confidential. We will respond within 24 business hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
