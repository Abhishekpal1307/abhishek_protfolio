import { motion } from "framer-motion";
import { Code2, Lightbulb, Users, Zap } from "lucide-react";

const drives = [
  { icon: Lightbulb, text: "Building meaningful digital products", color: "hsl(50, 100%, 60%)" },
  { icon: Code2, text: "Writing efficient and scalable code", color: "hsl(250, 89%, 65%)" },
  { icon: Zap, text: "Learning emerging technologies", color: "hsl(170, 80%, 50%)" },
  { icon: Users, text: "Solving real-world problems with software", color: "hsl(280, 80%, 60%)" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-4 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-primary/5 blur-[80px]" />
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-secondary/5 blur-[80px]" />

      <div className="container max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 justify-center mb-3"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Who I am</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold mb-4 text-center"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-20 h-1 gradient-bg mx-auto rounded-full mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass-card-hover p-8 md:p-10 mb-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 gradient-bg opacity-50" />
          <p className="text-muted-foreground leading-relaxed mb-5 text-base md:text-lg">
            I am a motivated developer with hands-on experience building full-stack applications using modern web technologies. My development approach focuses on clean architecture, scalable systems, and intuitive user experiences.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-5 text-base md:text-lg">
            During my training and projects, I have worked extensively with both frontend and backend technologies, enabling me to build complete end-to-end applications.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            I enjoy solving complex problems, experimenting with new tools, and continuously improving my development skills to stay updated with modern industry practices.
          </p>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl font-heading font-semibold mb-8 text-center"
        >
          What Drives Me
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {drives.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 100 }}
              className="glass-card-hover p-6 flex items-center gap-4 group"
            >
              <div
                className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${d.color}15`,
                  boxShadow: `0 0 20px -5px ${d.color}20`,
                }}
              >
                <d.icon className="h-5 w-5" style={{ color: d.color }} />
              </div>
              <span className="text-foreground font-medium">{d.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;