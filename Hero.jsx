import React from 'react'
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const background = useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(124,58,237,0.12), transparent 60%)`

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      <motion.div style={{ background }} className="absolute inset-0 pointer-events-none" />
      <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="glass-card p-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            I’m{' '}
            <span className="text-accent bg-gradient-to-r from-purple-400 to-indigo-400">
              Hussein Ali
            </span>
            <br />
            Crafting premium web experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-gray-300"
          >
            Computer Engineering student from Basrah with a strong interest in
            technology and design. I enjoy turning ideas into functional,
            visually appealing, and impactful digital solutions. My focus is on
            creating user centered projects that combine creativity, efficiency,
            and modern development practices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full shadow-glow-lg"
            >
              Contact Me <FaArrowRight />
            </a>
            <a
              href="#projects"
              className="px-4 py-3 border border-white/10 rounded-full text-sm"
            >
              View Work
            </a>
          </motion.div>
        </div>

        <div className="p-6">
          <div className="glass-card p-6 flex flex-col items-center justify-center">
         <img
  src="https://drive.google.com/uc?export=view&id=1Ox4OuESAzsE9udxx7-cGh09lBnSvThhj"
  alt="avatar"
  className="w-40 h-70 rounded-full border-4 border-white/6 object-contain"
/>


            <h3 className="mt-4 text-xl font-semibold">Hussein Ali</h3>
            <p className="text-gray-300 mt-2 text-center">
              Judges a book by its cover...
            </p>
            <p className="text-accent bg-gradient-to-r from-purple-400 to-indigo-400 text-center mt-2">
              Because if the cover does not impress you what else can?
            </p>
            <div className="mt-4 flex gap-3">
             <a
  href="https://drive.google.com/uc?export=download&id=1A9XaIv3ghF9NsUj4ao6V61ErR4gRPMlK"
  download="cv.pdf"
  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full shadow-glow-lg"
>
  Resume
</a>


              <a
                href="https://www.linkedin.com/in/hussein-ali-37556633b/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 border border-white/10 rounded-full text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
