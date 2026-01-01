import { Shield, Clock, Target, Handshake, Check } from "lucide-react";

const commitments = [
  {
    icon: Shield,
    title: "Fierce Advocacy",
    description: "We stand as your shield against legal challenges, fighting with tenacity and strategic precision.",
  },
  {
    icon: Clock,
    title: "Responsive Service",
    description: "Your concerns are our priority. We respond promptly because legal matters cannot wait.",
  },
  {
    icon: Target,
    title: "Results-Focused",
    description: "Every strategy we develop is aimed at achieving the best possible outcome for your case.",
  },
  {
    icon: Handshake,
    title: "Client Partnership",
    description: "We work alongside you, ensuring you understand every step of your legal journey.",
  },
];

const promises = [
  "Transparent communication at every stage",
  "Fixed fee structures where possible",
  "Personalized attention from senior attorneys",
  "Strict confidentiality guaranteed",
  "Regular case updates and progress reports",
  "Access to a network of legal experts",
];

export function WhyUs() {
  return (
    <section id="why-us" className="section-padding bg-primary">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <span className="text-sm tracking-[0.2em] text-gold uppercase font-medium mb-4 block">
              Our Commitment
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground leading-tight mb-6">
              Why Clients Trust Nengwekhulu Attorneys
            </h2>
            <div className="w-20 h-1 bg-gold mb-8" />
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10">
              Choosing legal representation is a decision of profound importance. At Nengwekhulu Attorneys, 
              we understand this responsibility and deliver service worthy of your trust.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {commitments.map((item) => (
                <div key={item.title} className="border-l-2 border-gold pl-4">
                  <item.icon className="w-6 h-6 text-gold mb-3" />
                  <h4 className="font-semibold text-primary-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Promises */}
          <div className="bg-primary-foreground/5 backdrop-blur-sm p-8 lg:p-10 border border-primary-foreground/10">
            <h3 className="font-serif text-2xl text-primary-foreground mb-6">
              Our Promise to You
            </h3>
            <ul className="space-y-4">
              {promises.map((promise) => (
                <li key={promise} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-primary-foreground/90 text-lg">{promise}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-primary-foreground/20">
              <p className="text-primary-foreground/80 italic">
                "Your success is our reputation. We don't just practice law—we practice excellence."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
