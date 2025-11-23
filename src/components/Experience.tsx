import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const experiences = [
    {
      company: 'WSO2',
      position: 'Software Engineer Intern',
      period: '2025',
      description: [
        'Built trainee management system using React Native, Golang, PostgreSQL, and WSO2 Choreo',
        'Integrated Azure authentication for secure user access',
        'Designed UI/UX using Figma with modern design principles',
        'Conducted client meetings and product demos',
      ],
      color: 'cyan',
    },
  ];

  return (
    <section id="experience" className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />

      <div className="relative z-10 max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4">
            Professional <span className="text-cyan-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-cyan-500/50 to-transparent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-5 h-5 bg-cyan-500 rounded-full border-4 border-black shadow-[0_0_20px_rgba(0,255,255,0.5)] hidden md:block" />

                {/* Content Card */}
                <div className="md:ml-20 relative group">
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-400 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,255,0.2)]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-3xl text-cyan-400 mb-2">{exp.position}</h3>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Briefcase size={18} />
                          <span className="text-xl">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                        <Calendar size={18} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <span className="text-cyan-400 mt-1">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
