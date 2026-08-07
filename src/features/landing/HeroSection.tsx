import mentorImage from "@/assets/mentor-portrait.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(var(--gold)/0.15)] rounded-full blur-3xl" />
      
      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 gap-12">
        {/* Content */}
        <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
          <div className="space-y-2">
            <p className="text-primary font-medium tracking-wider uppercase text-sm">
              Mentor • Coach • Guide
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Transforma
              <span className="block text-gradient">Diseña tu perspéctiva</span>
            </h1>
          </div>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Quien eres? A donde vas? etc TODO
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="btn-hero group text-base px-8">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Session
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="btn-hero-outline text-base px-8">
              Learn More
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
            {[
              { number: "500+", label: "Students Guided" },
              { number: "20+", label: "Years Experience" },
              { number: "98%", label: "Success Rate" },
            ].map((stat, i) => (
              <div key={i} className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.number}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Image */}
        <div className="flex-1 flex justify-center lg:justify-end animate-fade-in-up">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-[hsl(var(--gold)/0.3)] blur-3xl scale-110 rounded-full" />
            
            {/* Image container */}
            <div className="relative w-[320px] md:w-[400px] lg:w-[480px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-card">
              <img
                src={mentorImage}
                alt="Professional mentor portrait"
                className="w-full h-full object-cover object-center"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 shadow-lg animate-float">
              <p className="text-sm font-medium text-foreground">⭐ Mentor De Confianza</p>
              <p className="text-xs text-muted-foreground">Experto y Experimentado</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
