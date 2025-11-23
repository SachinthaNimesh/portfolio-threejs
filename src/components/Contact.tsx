import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { Send, Mail, Linkedin, Github, MapPin } from "lucide-react";

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sanisenevirathna@gmail.com",
      href: "mailto:sanisenevirathna@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/sachintha-dissanayaka",
      href: "https://www.linkedin.com/in/sachintha-dissanayaka-565135201",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/sachintha",
      href: "https://github.com/SachinthaNimesh",
    },
  ];

  return (
    <section id="contact" className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-900/50 border border-cyan-500/30 rounded-2xl focus:outline-none focus:border-cyan-400 transition-colors duration-300 text-white placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-900/50 border border-cyan-500/30 rounded-2xl focus:outline-none focus:border-cyan-400 transition-colors duration-300 text-white placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-900/50 border border-cyan-500/30 rounded-2xl focus:outline-none focus:border-cyan-400 transition-colors duration-300 text-white placeholder-gray-500 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="group w-full px-8 py-4 bg-cyan-500 text-black rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,255,0.5)] flex items-center justify-center gap-3"
              >
                <span>Send Message</span>
                <Send
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-cyan-500/20">
              <h3 className="text-2xl text-cyan-400 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-gray-900/50 hover:bg-gray-900 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-all duration-300">
                      <info.icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl text-cyan-400 mb-2">Location</h4>
                  <p className="text-gray-300">Sri Lanka</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Open to remote opportunities worldwide
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
