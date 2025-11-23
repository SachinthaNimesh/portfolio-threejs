import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { Users, Heart } from "lucide-react";

export function Volunteering() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const roles = [
    {
      title: "President",
      organization: "Computer Engineering Society",
      description:
        "Leading the society, organizing technical events, and fostering a collaborative learning environment.",
      icon: Users,
    },
    {
      title: "National Project Coordinator",
      organization: "Learn Steer",
      description:
        "Coordinating educational initiatives and mentorship programs across the nation.",
      icon: Heart,
    },
    {
      title: "National Project Coordinator",
      organization: "Nipayumani",
      description:
        "Managing nationwide projects focused on community development and technology education.",
      icon: Heart,
    },
    {
      title: "Assistant Secretary",
      organization: "IEEE Student Branch",
      description:
        "Supporting branch activities, managing communications, and organizing technical workshops.",
      icon: Users,
    },
  ];

  return (
    <section id="volunteering" className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/40 to-black" />

      <div className="relative z-10 max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4">
            Volunteering & <span className="text-cyan-400">Leadership</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,255,0.2)] h-full">
                {/* Icon */}
                <div className="mb-6 inline-block p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-all duration-300">
                  <role.icon size={32} className="text-cyan-400" />
                </div>

                {/* Content */}
                <h3 className="text-2xl text-cyan-400 mb-2">{role.title}</h3>
                <p className="text-xl text-gray-300 mb-4">
                  {role.organization}
                </p>
                <p className="text-gray-400 leading-relaxed">
                  {role.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-cyan-500/30 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
