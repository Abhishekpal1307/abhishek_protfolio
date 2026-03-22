import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";

const projects = [
  {
    title: "Travel Management System",
    description: "A comprehensive web platform designed to simplify travel planning by providing an integrated environment for booking travel services.",
    overview: "A web application for booking hotels, flights, and tour guides, providing destination-wise hotel details, virtual tours, and vendor services, with an admin dashboard to manage users, bookings, and service providers efficiently.",
    features: [
      "Unified platform for booking hotels, taxis, flights, and tour guides",
      "Destination-based hotel listings with room types, availability, and per-person pricing",
      "Travel package comparison for better decision making",
      "Admin dashboard to manage users, hotels, bookings, and service providers",
      "User reviews, booking history, destination insights, and safety information",
    ],
    tech: ["HTML", "CSS", "Django", "MySQL", "Django Auth", "MVT"],
    color: "from-primary to-accent",
    date: "November 2025",
  },
  {
    title: "Home Décor E-Commerce",
    description: "A responsive web application built to showcase and sell furniture products with an interactive and user-friendly interface.",
    overview: "Developed a responsive e-commerce web application for showcasing and selling furniture products, allowing users to browse, filter, and purchase items seamlessly.",
    features: [
      "Product listing with detailed descriptions, pricing using Bootstrap cards",
      "Category-based search and filtering by categories and price range",
      "Shopping cart and checkout functionality",
      "Admin dashboard to add, update, and delete products",
    ],
    tech: ["React.js", "JavaScript", "CSS", "Bootstrap", "MySQL"],
    color: "from-secondary to-primary",
    liveUrl: "https://home-decor-63rp.onrender.com/",
    date: "November 2024",
  },
  {
    title: "Dynamic Blog Platform",
    description: "A full-stack blog application built during MERN training allowing users to create, manage, and interact with blog posts.",
    overview: "A full-stack web application built using MERN stack that allows users to create, edit, delete and read blog posts with features like authentication, commenting, and search functionality.",
    features: [
      "Create, edit, delete, and read blog posts",
      "User authentication and authorization",
      "Search and comment on posts",
      "Dynamic content management",
    ],
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    color: "from-accent to-secondary",
    date: "July 2024",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 px-4 relative">
      <div className="absolute top-40 left-0 w-72 h-72 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-40 right-0 w-72 h-72 rounded-full bg-secondary/5 blur-[120px]" />

      <div className="container max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 justify-center mb-3"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-primary font-mono text-sm tracking-wider uppercase">My work</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold mb-4 text-center"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-20 h-1 gradient-bg mx-auto rounded-full mb-14"
        />

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 60 }}
              whileHover={{ y: -6 }}
              className="glass-card overflow-hidden group relative glow-border transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${project.color} opacity-70 group-hover:opacity-100 transition-opacity`} />

              <div className="p-7 md:p-9">
                {/* Project header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-muted-foreground/50">
                        PROJECT {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs font-mono text-primary/60">{project.date}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    className="p-2 rounded-lg bg-primary/10 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </motion.div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                {/* Overview */}
                <div className="mb-6 p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <h4 className="text-sm font-semibold text-primary mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full gradient-bg" />
                    Overview
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.overview}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {project.features.map((f) => (
                      <li key={f} className="text-sm text-muted-foreground flex items-start gap-2.5">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-xs rounded-full bg-primary/8 text-primary/80 border border-primary/15 font-mono hover:bg-primary/15 hover:text-primary transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-all mt-4 cursor-pointer z-10 relative"
                  >
                    <Globe className="h-4 w-4" />
                    Visit Live Website
                    <ExternalLink className="h-3 w-3" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
