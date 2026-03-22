import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C / C++", "JavaScript", "Java", "HTML & CSS", "PHP"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Node.js", "Django (Python)", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git & GitHub", "VS Code", "VirtualBox"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-muted/40 to-muted/20" />

      <div className="container max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 justify-center mb-3"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-primary font-mono text-sm tracking-wider uppercase">What I know</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold mb-4 text-center"
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-20 h-1 gradient-bg mx-auto rounded-full mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1, type: "spring", stiffness: 80 }}
              className="glass-card-hover p-6 md:p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 gradient-bg opacity-40" />
              <h3 className="font-heading font-semibold text-lg mb-6 text-primary flex items-center gap-2">
                <span className="w-2 h-2 rounded-full gradient-bg" />
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + si * 0.08 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-4 py-2 rounded-full border border-primary/20 text-sm font-medium text-foreground bg-primary/5 hover:bg-primary/10 hover:border-primary/40 transition-all cursor-default backdrop-blur-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10"
        >
          <h3 className="font-heading font-semibold text-lg mb-6 text-center text-primary">Professional Strengths</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Problem Solving", "Analytical Thinking", "Team Collaboration", "Adaptability", "Creative Thinking"].map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.08 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-5 py-2.5 rounded-full border border-primary/20 text-sm font-medium text-foreground bg-primary/5 hover:bg-primary/10 hover:border-primary/40 transition-all cursor-default backdrop-blur-sm"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
