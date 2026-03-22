import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Training", href: "#training" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);

    const sections = links.map((l) => l.href.slice(1));
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.getBoundingClientRect().top <= 150) {
        setActiveSection(sections[i]);
        return;
      }
    }
    setActiveSection("");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/50"
            : ""
        }`}
      >
        <div className="container flex items-center justify-between py-4 px-4">
          <button
            onClick={() => handleClick("#hero")}
            className="text-2xl font-heading font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            AP<span className="text-accent">.</span>
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const isActive = activeSection === l.href.slice(1);
              return (
                <button
                  key={l.label}
                  onClick={() => handleClick(l.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full gradient-bg"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}

            {/* Theme toggle */}
            <motion.button
              onClick={() => setDark(!dark)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="ml-2 p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {dark ? (
                  <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Sun className="h-4 w-4" />
                  </motion.div>
                ) : (
                  <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Moon className="h-4 w-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex md:hidden items-center gap-1">
            <motion.button
              onClick={() => setDark(!dark)}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg"
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.button>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted/50"
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 overflow-hidden"
            >
              <div className="flex flex-col items-center gap-2 py-6">
                {links.map((l, i) => (
                  <motion.button
                    key={l.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleClick(l.href)}
                    className={`w-full max-w-xs px-6 py-3 text-sm font-medium rounded-lg transition-colors ${
                      activeSection === l.href.slice(1)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                    }`}
                  >
                    {l.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
