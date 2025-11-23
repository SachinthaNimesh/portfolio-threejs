import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const projects = [
    {
      title: "Worky",
      subtitle: "Trainee Management System",
      description:
        "Built at WSO2 using React Native, Golang, PostgreSQL, and Choreo platform. Features Azure authentication and modern UI/UX.",
      tags: ["React Native", "Golang", "PostgreSQL", "Azure"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
      title: "Exam Registration Portal",
      subtitle: "University System",
      description:
        "Full-stack web application built with .NET, MySQL, and Blazor for streamlined exam registration process.",
      tags: [".NET", "MySQL", "Blazor"],
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
    },
    {
      title: "Mate Chatbot",
      subtitle: "RAG-powered Slack Bot",
      description:
        "Intelligent chatbot using LangChain, OpenAI, and ChromaDB for context-aware conversations in Slack.",
      tags: ["LangChain", "OpenAI", "ChromaDB", "RAG"],
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
    },
    {
      title: "Big Data ECG Analytics",
      subtitle: "Healthcare Analytics",
      description:
        "Large-scale ECG data processing system using Apache Spark, Hadoop, and Google Cloud Platform.",
      tags: ["Spark", "Hadoop", "GCP", "Big Data"],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    },
    {
      title: "Airbnb Clone",
      subtitle: "Full-stack Application",
      description:
        "Feature-rich vacation rental platform built with MongoDB, Express, React, and Node.js (MERN stack).",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section id="projects" className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,255,255,0.3)]">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

                  {/* Overlay Icons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/50 hover:bg-cyan-500/30 transition-all duration-300">
                      <Github size={20} className="text-cyan-400" />
                    </button>
                    <button className="p-2 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/50 hover:bg-cyan-500/30 transition-all duration-300">
                      <ExternalLink size={20} className="text-cyan-400" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl text-cyan-400 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
