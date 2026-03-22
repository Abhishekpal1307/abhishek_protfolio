import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-4 border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 to-transparent" />

      <div className="container relative flex flex-col items-center gap-6">
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -4, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
        >
          <ArrowUp className="h-4 w-4" />
        </motion.button>

        <div className="flex items-center gap-5">
          {[
            { icon: Github, href: "https://github.com/Abhishekpal1307", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/abhishek-pal-kanpur", label: "LinkedIn" },
            { icon: Mail, href: "mailto:abhi130703@gmail.com", label: "Email" },
          ].map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.15 }}
              className="p-2.5 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              aria-label={s.label}
            >
              <s.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground flex items-center gap-1.5 justify-center">
            Built with <Heart className="h-3 w-3 text-destructive fill-destructive" /> by{" "}
            <span className="gradient-text font-medium">Abhishek Pal</span>
          </p>
          <p className="text-xs text-muted-foreground/50 mt-1 font-mono">
            © {new Date().getFullYear()} • React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;