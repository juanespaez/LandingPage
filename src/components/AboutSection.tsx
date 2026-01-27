import mentorImage from "@/assets/mentor-portrait.jpg";
import { CheckCircle } from "lucide-react";

const highlights = [
  "20+ years of professional mentoring experience",
  "Certified life and career coach",
  "MBA from a top business school",
  "Featured speaker at international conferences",
  "Author of best-selling personal development books",
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-[hsl(var(--gold)/0.2)] rounded-3xl blur-2xl" />
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={mentorImage}
                  alt="About the mentor"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
                <p className="text-4xl font-bold">20+</p>
                <p className="text-sm opacity-90">Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wider uppercase text-sm">
                About Me
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Empowering Your Journey to{" "}
                <span className="text-gradient">Success</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                With a passion for helping others achieve their dreams, I've dedicated 
                my career to guiding individuals through their most challenging transitions 
                and helping them discover their true potential.
              </p>
              <p>
                My approach combines practical strategies with deep personal insight, 
                creating a supportive environment where transformation happens naturally.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
