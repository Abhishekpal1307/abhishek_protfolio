import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Code, ArrowUpRight } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "abhi130703@gmail.com", href: "mailto:abhi130703@gmail.com", color: "hsl(0, 70%, 55%)" },
  { icon: Phone, label: "Phone", value: "+91-9555349309", href: "tel:+919555349309", color: "hsl(120, 50%, 50%)" },
  { icon: Linkedin, label: "LinkedIn", value: "abhishek-pal-kanpur", href: "https://linkedin.com/in/abhishek-pal-kanpur", color: "hsl(210, 80%, 55%)" },
  { icon: Github, label: "GitHub", value: "Abhishekpal1307", href: "https://github.com/Abhishekpal1307", color: "hsl(0, 0%, 70%)" },
  { icon: Code, label: "LeetCode", value: "Abhishekpal1307", href: "https://leetcode.com/u/Abhishekpal1307/", color: "hsl(35, 100%, 55%)" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-muted/40 to-muted/20" />

      <div className="container max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 justify-center mb-3"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Let's connect</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold mb-4 text-center"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-20 h-1 gradient-bg mx-auto rounded-full mb-6"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-muted-foreground mb-14 max-w-lg mx-auto leading-relaxed"
        >
          Interested in collaborating, discussing opportunities, or building innovative projects together? Feel free to reach out.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.label !== "Phone" && c.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 80 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-card p-5 flex items-center gap-4 hover:border-primary/40 transition-all group cursor-pointer"
            >
              <div
                className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${c.color}15`,
                  boxShadow: `0 0 20px -5px ${c.color}20`,
                }}
              >
                <c.icon className="h-5 w-5" style={{ color: c.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground font-mono">{c.label}</p>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">{c.value}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;