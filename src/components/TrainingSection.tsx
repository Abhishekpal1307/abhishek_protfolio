import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const TrainingSection = () => {
  return (
    <section id="training" className="py-28 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-muted/40 to-muted/20" />

      <div className="container max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 justify-center mb-3"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-primary font-mono text-sm tracking-wider uppercase">My journey</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold mb-4 text-center"
        >
          Training & <span className="gradient-text">Education</span>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-20 h-1 gradient-bg mx-auto rounded-full mb-14"
        />

        {/* Timeline line */}
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent hidden md:block" />

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60 }}
            className="glass-card-hover p-7 md:p-9 mb-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full gradient-bg opacity-50" />
            <div className="flex items-start gap-4 mb-5">
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:scale-110 transition-transform">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold">MERN Stack Development Training</h3>
                <p className="text-primary text-sm font-medium mt-0.5">Cipher School</p>
                <p className="text-muted-foreground text-xs flex items-center gap-1 mt-1.5 font-mono">
                  <Calendar className="h-3 w-3" /> June 2024 – July 2024
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
              Completed an intensive full-stack development training program focused on building dynamic web applications using the MERN stack.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React.js", "Node.js", "Express", "MongoDB", "REST APIs", "Authentication"].map((t) => (
                <span key={t} className="px-3 py-1.5 text-xs rounded-full bg-primary/8 text-primary/80 border border-primary/15 font-mono">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 60 }}
            className="glass-card-hover p-7 md:p-9 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-secondary to-accent opacity-50" />
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-secondary/10 text-secondary shrink-0">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold">B.Tech - Computer Science & Engineering</h3>
                <p className="text-secondary text-sm font-medium mt-0.5">Lovely Professional University, Punjab</p>
                <p className="text-muted-foreground text-xs flex items-center gap-1 mt-1.5 font-mono">
                  <Calendar className="h-3 w-3" /> August 2022 – July 2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;