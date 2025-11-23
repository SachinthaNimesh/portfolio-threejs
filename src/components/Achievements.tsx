import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { Trophy, Award, Star } from "lucide-react";

export function Achievements() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const achievements = [
    {
      title: "IEEE Xtreme 18.0",
      rank: "Rank 424",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "UoJ Coders 3.0",
      rank: "Rank 02",
      icon: Award,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "ACES Coders",
      rank: "Rank 24",
      icon: Star,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "AlgoXplore",
      rank: "Finalist",
      icon: Trophy,
      color: "from-green-500 to-teal-500",
    },
    {
      title: "BITCODE",
      rank: "Finalist",
      icon: Award,
      color: "from-red-500 to-orange-500",
    },
  ];

  return (
    <section id="achievements" className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4">
            Achievements & <span className="text-cyan-400">Awards</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(0,255,255,0.3)] h-full flex flex-col items-center text-center">
                {/* Icon with Gradient Background */}
                <div
                  className={`mb-6 p-6 rounded-full bg-gradient-to-br ${achievement.color} bg-opacity-10 relative`}
                >
                  <achievement.icon
                    size={48}
                    className="text-cyan-400 relative z-10"
                  />
                  <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl group-hover:blur-2xl transition-all duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-2xl text-cyan-400 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-3xl text-white mb-4">{achievement.rank}</p>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl" />

                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-lg" />
                  <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-lg" />
                  <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-lg" />
                  <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-cyan-400/50 rounded-br-lg" />
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-2xl -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
