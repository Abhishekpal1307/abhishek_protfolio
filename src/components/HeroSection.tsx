import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  "Full-Stack Developer",
  "React Developer",
  "Backend Engineer",
  "Problem Solver",
];

const floatingIcons = [
  { label: "React", color: "hsl(192, 91%, 56%)", symbol: "⚛", x: "10%", y: "20%", delay: 0 },
  { label: "JS", color: "hsl(50, 100%, 50%)", symbol: "JS", x: "85%", y: "15%", delay: 1 },
  { label: "Node", color: "hsl(120, 50%, 50%)", symbol: "⬡", x: "80%", y: "70%", delay: 2 },
  { label: "TS", color: "hsl(211, 60%, 48%)", symbol: "TS", x: "15%", y: "75%", delay: 0.5 },
  { label: "DB", color: "hsl(280, 80%, 60%)", symbol: "◈", x: "5%", y: "50%", delay: 1.5 },
  { label: "Git", color: "hsl(10, 80%, 55%)", symbol: "⎇", x: "90%", y: "45%", delay: 2.5 },
];

const Particle = ({ index }: { index: number }) => {
  const style = useMemo(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${Math.random() * 3 + 1}px`,
    height: `${Math.random() * 3 + 1}px`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${Math.random() * 10 + 8}s`,
  }), []);

  return (
    <div
      className="absolute rounded-full bg-primary/20"
      style={{
        ...style,
        animation: `float-particle ${style.animationDuration} ease-in-out infinite`,
        animationDelay: style.animationDelay,
      }}
    />
  );
};

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIndex];
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1500);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 animate-gradient-shift" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/8 blur-[150px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating tech icons */}
      <div className="absolute inset-0 hidden md:block">
        {floatingIcons.map((icon) => (
          <motion.div
            key={icon.label}
            className="absolute"
            style={{ left: icon.x, top: icon.y }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5 + icon.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: icon.delay,
            }}
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-xl border border-border/50 text-lg font-mono font-bold backdrop-blur-sm"
              style={{
                color: icon.color,
                background: `${icon.color}10`,
                boxShadow: `0 0 30px -5px ${icon.color}20`,
              }}
            >
              {icon.symbol}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-mono text-muted-foreground">Available for opportunities</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-mono text-sm mb-4 tracking-wider"
        >
          {"<hello world />"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 tracking-tight text-name"
        >
          Abhishek{" "}
          <span className="gradient-text relative">
            Pal
            <motion.span
              className="absolute -bottom-2 left-0 right-0 h-1 rounded-full gradient-bg"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              style={{ transformOrigin: "left" }}
            />
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-3xl font-heading text-muted-foreground mb-8 h-10"
        >
          <span className="text-foreground">{displayed}</span>
          <span className="typing-cursor" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed"
        >
          Transforming ideas into modern, responsive, and user-focused digital experiences
          <span className="text-primary">.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button
            size="lg"
            className="gradient-bg text-primary-foreground hover:opacity-90 btn-ripple text-base px-8 h-12 shadow-lg shadow-primary/20"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            <FolderOpen className="mr-2 h-5 w-5" /> View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 btn-ripple text-base px-8 h-12 backdrop-blur-sm"
            asChild
          >
            <a href="/Abhishek_Pal_Resume.pdf" download>
              <Download className="mr-2 h-5 w-5" /> Resume
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 btn-ripple text-base px-8 h-12 backdrop-blur-sm"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Mail className="mr-2 h-5 w-5" /> Contact
          </Button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-mono text-muted-foreground/50 tracking-widest uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4 text-muted-foreground/50" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
