import { Scale, Users, Award, BookOpen } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sm tracking-[0.2em] text-gold uppercase font-medium mb-4 block">
              About Our Firm
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              A Legacy of Legal Excellence in South Africa
            </h2>
            <div className="w-20 h-1 bg-gold mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Nengwekhulu Attorneys Inc. stands as a beacon of legal excellence in South Africa. 
              Founded on the principles of justice, integrity, and unwavering commitment to our clients, 
              we have built a reputation as trusted legal advisors for individuals and businesses alike.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our team of seasoned attorneys brings decades of combined experience across criminal law, 
              civil litigation, family law, and property law. We approach each case with the discipline, 
              strategic thinking, and relentless advocacy that our clients deserve.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-sm bg-primary flex items-center justify-center flex-shrink-0">
                  <Scale className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Justice</h4>
                  <p className="text-sm text-muted-foreground">Fearless advocacy for what is right</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-sm bg-primary flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Integrity</h4>
                  <p className="text-sm text-muted-foreground">Honest counsel you can trust</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-sm bg-primary flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Excellence</h4>
                  <p className="text-sm text-muted-foreground">Uncompromising legal standards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-sm bg-primary flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Knowledge</h4>
                  <p className="text-sm text-muted-foreground">Deep expertise in South African law</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-[4/5] bg-primary relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-12">
                  <Scale className="w-24 h-24 text-gold mx-auto mb-8 opacity-80" />
                  <blockquote className="font-serif text-2xl text-primary-foreground italic leading-relaxed">
                    "Justice delayed is justice denied. We fight with urgency because your rights cannot wait."
                  </blockquote>
                  <div className="w-12 h-0.5 bg-gold mx-auto mt-6 mb-4" />
                  <cite className="text-gold text-sm tracking-wide not-italic">
                    — Firm Philosophy
                  </cite>
                </div>
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
