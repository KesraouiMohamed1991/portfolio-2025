'use client';
import { motion } from "framer-motion";

export default function AboutPage() {
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <main className="h-screen text-white py-20 px-4">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-3 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariant}
          >
            About Me
          </motion.h1>
          <motion.p
            className="text-slate-400 max-w-xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariant}
          >
            I'm a developer who loves turning ideas into digital experiences.
            My work blends clean code, sleek design, and a passion for learning new things.
          </motion.p>
        </div>

        <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
          {[
            `Hey! I'm Moha, a front-end developer based in Marseille. I enjoy building responsive, user-friendly interfaces and exploring creative coding through technologies like Next.js, Tailwind CSS, and Node JS.`,
            `When I'm not coding, you'll find me capturing cityscapes with my camera 📸, sipping mint tea 🍃, or dreaming up the next side project.`,
            `Currently teaching at La Capsule and leading exciting fullstack bootcamps. I love helping others level up their dev skills!`,
            `Besides all that, I am also learning about shaders in Three.js.`,
          ].map((text, index) => (
            <motion.p
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariant}
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.div
          className="pt-10 text-center text-slate-500 text-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariant}
        >
          Wanna connect? Head over to the{" "}
          <a href="/contact" className="text-green-400 hover:underline">
            Contact
          </a>{" "}
          page.
        </motion.div>
      </div>
    </main>
  );
}
