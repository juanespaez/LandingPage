import Navbar from "@/layout/Navbar";
import HeroSection from "@/features/landing/HeroSection";
import AboutSection from "@/features/landing/AboutSection";
import ServicesSection from "@/features/landing/ServicesSection";
import ContactSection from "@/features/landing/ContactSection";
import Footer from "@/layout/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
