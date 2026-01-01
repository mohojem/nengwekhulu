import { Gavel, Building, Heart, Home, ArrowRight } from "lucide-react";

const practiceAreas = [
  {
    icon: Gavel,
    title: "Criminal Law",
    description: "Strategic defense against criminal charges. From serious offenses to regulatory matters, we protect your rights and fight for your freedom with unwavering determination.",
    services: ["Bail Applications", "Trial Defense", "Appeals", "Regulatory Offenses"],
  },
  {
    icon: Building,
    title: "Civil Litigation",
    description: "Resolving complex commercial and personal disputes with precision and tactical excellence. We pursue favorable outcomes through negotiation or courtroom advocacy.",
    services: ["Contract Disputes", "Debt Recovery", "Personal Injury", "Commercial Litigation"],
  },
  {
    icon: Heart,
    title: "Family Law",
    description: "Compassionate yet decisive representation in matters affecting your family. We navigate sensitive issues with discretion while protecting your interests.",
    services: ["Divorce Proceedings", "Child Custody", "Maintenance Claims", "Domestic Agreements"],
  },
  {
    icon: Home,
    title: "Property Law",
    description: "Expert guidance through property transactions and disputes. From conveyancing to complex ownership matters, we secure your property interests.",
    services: ["Conveyancing", "Property Disputes", "Lease Agreements", "Title Transfers"],
  },
];

export function PracticeAreas() {
  return (
    <section id="practice-areas" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm tracking-[0.2em] text-gold uppercase font-medium mb-4 block">
            Practice Areas
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
            Comprehensive Legal Services
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground text-lg">
            Our expertise spans the critical areas of South African law, offering strategic counsel 
            and aggressive representation when it matters most.
          </p>
        </div>

        {/* Practice Area Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {practiceAreas.map((area, index) => (
            <div
              key={area.title}
              className="group bg-card border border-border hover:border-gold/30 p-8 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                  <area.icon className="w-7 h-7 text-gold group-hover:text-primary transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-gold transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 mb-4">
                    {area.services.map((service) => (
                      <li
                        key={service}
                        className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-gold transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
