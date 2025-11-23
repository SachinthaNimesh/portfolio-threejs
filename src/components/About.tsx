import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { Code2, Cloud, Brain, Database, MessageSquare } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const strengths = [
    { icon: Code2, title: "Full-stack Development", color: "cyan" },
    { icon: Cloud, title: "Distributed Computing", color: "blue" },
    { icon: Brain, title: "AI/ML", color: "purple" },
    { icon: Database, title: "Cloud Systems", color: "green" },
    { icon: MessageSquare, title: "RAG + Chatbots", color: "pink" },
  ];

  return (
    <section id="about" className="relative py-32 px-4 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm p-2">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src="public/me.jpeg"
                  alt="Sachintha Dissanayaka"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            </div>

            {/* Floating decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-cyan-500/20">
              <p className="text-gray-300 leading-relaxed text-lg">
                Computer Engineering graduate with full-stack development
                experience in mobile and web applications. Skilled in cloud
                platforms, distributed systems, and machine learning. Passionate
                about applying technology to solve real-world problems.
              </p>
            </div>

            {/* Key Strengths */}
            <div className="space-y-4">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-gray-900/50 to-transparent border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div
                    className={`p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-all duration-300`}
                  >
                    <strength.icon size={24} />
                  </div>
                  <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                    {strength.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
