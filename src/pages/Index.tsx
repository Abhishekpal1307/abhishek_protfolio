import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TrainingSection from "@/components/TrainingSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const FloatingShape = ({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    animate={{
      y: [0, -30, 0],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 20 + delay * 5,
      repeat: Infinity,
      ease: "linear",
      delay,
    }}
  />
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background noise-overlay relative">
      {/* Floating geometric shapes */}
      <FloatingShape
        className="top-[20%] left-[5%] w-16 h-16 border border-primary/10 rounded-lg opacity-20"
        delay={0}
      />
      <FloatingShape
        className="top-[40%] right-[8%] w-12 h-12 border border-secondary/10 rounded-full opacity-15"
        delay={2}
      />
      <FloatingShape
        className="top-[60%] left-[3%] w-8 h-8 border border-accent/10 rotate-45 opacity-20"
        delay={4}
      />
      <FloatingShape
        className="top-[80%] right-[5%] w-20 h-20 border border-primary/5 rounded-2xl opacity-10"
        delay={6}
      />

      <Navbar />
      <HeroSection />

      {/* Wave divider */}
      <div className="relative h-24 -mt-12 z-10">
        <svg
          viewBox="0 0 1440 120"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
            fill="hsl(var(--background))"
            opacity="0.5"
          />
        </svg>
      </div>

      <AboutSection />
      <SkillsSection />

      {/* Wave divider */}
      <div className="relative h-16">
        <svg
          viewBox="0 0 1440 80"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z"
            fill="hsl(var(--background))"
            opacity="0.3"
          />
        </svg>
      </div>

      <ProjectsSection />
      <TrainingSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;