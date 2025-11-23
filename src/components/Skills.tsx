import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import * as THREE from "three";

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const skillCategories = [
    {
      category: "Languages",
      skills: [
        "Golang",
        "Java",
        "Python",
        "C++",
        "JavaScript",
        "SQL",
        "C",
        "C#",
      ],
      color: "cyan",
    },
    {
      category: "Frameworks",
      skills: [
        "Gin",
        "GORM",
        "React.js",
        "React Native",
        "Next.js",
        "Expo",
        ".NET",
        "Blazor",
        "FastAPI",
        "Express.js",
        "Spark MLlib",
      ],
      color: "blue",
    },
    {
      category: "Tools",
      skills: ["Git", "Docker", "Postman", "Figma", "Jira"],
      color: "purple",
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL"],
      color: "green",
    },
    {
      category: "Other",
      skills: [
        "Microservices",
        "Azure",
        "WSO2 Choreo",
        "CI/CD",
        "OAuth2",
        "JWT",
      ],
      color: "pink",
    },
  ];

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.position.z = 5;

    // Create code rain effect
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 20; // x
      posArray[i + 1] = Math.random() * 20 - 10; // y
      posArray[i + 2] = (Math.random() - 0.5) * 10; // z
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x00ffff,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    const animate = () => {
      requestAnimationFrame(animate);

      const positions = particlesGeometry.attributes.position
        .array as Float32Array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] -= 0.02; // Move down
        if (positions[i] < -10) {
          positions[i] = 10; // Reset to top
        }
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return (
    <section id="skills" className="relative py-32 px-4 overflow-hidden">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-30"
        style={{ width: "100%", height: "100%" }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-0" />

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4">
            Skills & <span className="text-cyan-400">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto" />
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="relative"
            >
              <div className="mb-6">
                <h3 className="text-2xl text-cyan-400 mb-2">
                  {category.category}
                </h3>
                <div className="w-16 h-0.5 bg-cyan-400/50" />
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="group relative"
                  >
                    <div className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                      <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
