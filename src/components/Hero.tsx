import { Scale, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-primary overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/10 to-transparent" />

      <div className="container-narrow relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <Scale className="w-5 h-5 text-gold" />
            <span className="text-sm tracking-[0.2em] text-gold uppercase font-medium">
              Advocates for Justice
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Unwavering Legal Excellence.{" "}
            <span className="text-gold">Uncompromising Integrity.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
            At Nengwekhulu Attorneys, we stand as disciplined advocates for those seeking justice. 
            With strategic precision and relentless dedication, we protect your rights and secure your future.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#contact" className="group">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#practice-areas">
                Our Practice Areas
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div>
              <div className="font-serif text-3xl md:text-4xl text-gold mb-1">25+</div>
              <div className="text-sm text-primary-foreground/70">Years of Excellence</div>
            </div>
            <div>
              <div className="font-serif text-3xl md:text-4xl text-gold mb-1">2,500+</div>
              <div className="text-sm text-primary-foreground/70">Cases Won</div>
            </div>
            <div>
              <div className="font-serif text-3xl md:text-4xl text-gold mb-1">98%</div>
              <div className="text-sm text-primary-foreground/70">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
    </section>
  );
}
