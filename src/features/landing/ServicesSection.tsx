import { BookOpen, Lightbulb, Target, Users, Briefcase, Heart } from "lucide-react";

const services = [
  {
    id: 1,
    icon: BookOpen,
    title: "Personal Tutoring",
    description: "One-on-one sessions tailored to your learning style and goals.",
  },
  {
    id: 2,
    icon: Target,
    title: "Career Coaching",
    description: "Strategic guidance to accelerate your professional growth.",
  },
  {
    id: 3,
    icon: Lightbulb,
    title: "Life Strategy",
    description: "Create a roadmap for achieving your personal aspirations.",
  },
  {
    id: 4,
    icon: Users,
    title: "Group Workshops",
    description: "Interactive sessions for teams and organizations.",
  },
  {
    id: 5,
    icon: Briefcase,
    title: "Executive Mentoring",
    description: "High-level guidance for business leaders and entrepreneurs.",
  },
  {
    id: 6,
    icon: Heart,
    title: "Wellness & Balance",
    description: "Holistic approaches to work-life harmony and wellbeing.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm">
            What I Offer
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Services & Programs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive mentoring solutions designed to help you excel in every area of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-6 flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm">Learn more</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
