import mentorImage from "@/assets/mentor-thinking.png";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/layout/Footer";

const values = [
  {
    title: "Escucha Real",
    description: "Cada sesión parte de entender tu historia antes de proponer un camino.",
  },
  {
    title: "Experiencia Comprobada",
    description: "Más de 20 años acompañando procesos de transformación personal y profesional.",
  },
  {
    title: "Acción Sobre Teoría",
    description: "Herramientas prácticas que se aplican desde la primera sesión.",
  },
];

const AboutMe = () => {
  return (
    <main className="overflow-x-hidden">
      <section className="relative min-h-screen hero-gradient overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(var(--gold)/0.15)] rounded-full blur-3xl" />

        <div className="container relative z-10 py-20">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image */}
            <div className="flex-1 flex justify-center animate-fade-in-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-[hsl(var(--gold)/0.3)] blur-3xl scale-110 rounded-full" />
                <div className="relative w-[280px] md:w-[360px] lg:w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-card">
                  <img
                    src={mentorImage}
                    alt="Leo, mentor y guía"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in">
              <p className="text-primary font-medium tracking-wider uppercase text-sm">
                Conoce a Leo
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                La persona detrás
                <span className="block text-gradient">de la mentoría</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed text-justify">
                Soy Leo, mentor y guía con más de 20 años acompañando a personas que buscan
                claridad sobre quiénes son y hacia dónde van. Creo que cada uno de nosotros
                lleva dentro las herramientas para transformar su realidad; mi trabajo es
                ayudarte a descubrirlas y a convertirlas en acción. He acompañado a cientos de
                estudiantes y profesionales a encontrar dirección, superar bloqueos y construir
                el camino hacia la vida que imaginan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button size="lg" className="btn-hero group text-base px-8" asChild>
                  <a href="/#contact">
                    <Calendar className="mr-2 h-5 w-5" />
                    Agenda una Sesión
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <p className="text-primary font-medium tracking-wider uppercase text-sm">
              Mi Enfoque
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Lo que guía cada sesión
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="service-card">
                <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutMe;
