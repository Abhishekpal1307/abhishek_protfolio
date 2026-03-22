import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  { name: "Project Management", org: "Coursera", date: "Oct 2025", pdf: "/certificates/project-management.pdf" },
  { name: "Cloud Computing", org: "NPTEL", date: "Apr 2025", pdf: "/certificates/cloud-computing.pdf" },
  { name: "SAP Data Analytics", org: "SAP", date: "2025", pdf: "/certificates/SAP_Data_Analytics.pdf" },
  { name: "MERN Stack Development", org: "Cipher School", date: "Jul 2024", pdf: "/certificates/mern-stack.pdf" },
  { name: "HTML, CSS, JavaScript", org: "Cipher School", date: "Jul 2024", pdf: "/certificates/html-css-js.pdf" },
  { name: "Server-Side JavaScript with Node.js", org: "Coursera", date: "Apr 2024", pdf: "/certificates/nodejs.pdf" },
  { name: "Programming in C++", org: "Coursera", date: "Nov 2023", pdf: "/certificates/cpp.pdf" },
  { name: "Mastering DSA using C and C++", org: "Udemy", date: "Nov 2023", pdf: "/certificates/dsa.pdf" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-28 px-4 relative">
      <div className="absolute top-20 right-0 w-60 h-60 rounded-full bg-primary/5 blur-[100px]" />

      <div className="container max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 justify-center mb-3"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Credentials</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold mb-4 text-center"
        >
          <span className="gradient-text">Certifications</span>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-20 h-1 gradient-bg mx-auto rounded-full mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 100 }}
              whileHover={{ y: -3 }}
            >
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 flex items-start gap-4 hover:border-primary/40 transition-all cursor-pointer group block hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Award className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-foreground flex items-center gap-2 group-hover:text-primary transition-colors">
                    <span className="truncate">{cert.name}</span>
                    <ExternalLink className="h-3 w-3 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 font-mono">{cert.org} • {cert.date}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
