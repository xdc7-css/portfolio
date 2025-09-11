import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const certificates = [
  { title: 'C++ Certificate', issuer: 'SoloLearn - 2025', link: 'https://www.sololearn.com/certificates/CC-MVACNWE1' },
  { title: 'SQL Fundamentals', issuer: 'SoloLearn - 2025', link: 'https://www.sololearn.com/certificates/CC-XQQE3MZT' },
  { title: 'AI in Data Analysis', issuer: 'SoloLearn - 2025', link: 'https://www.sololearn.com/certificates/CC-HR6MYGQG' },
  { title: 'Visualize Your Data', issuer: 'SoloLearn - 2025', link: 'https://www.sololearn.com/certificates/CC-DNXAC5SO' },
  { title: 'Introduction to Python', issuer: 'youtube - 2024', link: 'https://www.youtube.com/watch?v=qwAFL1597eM&t=890s&ab_channel=freeCodeCamp.org' },
  { title: 'Web Development', issuer: 'youtube - 2023', link: 'https://youtu.be/VAeRhmpcWEQ?si=DRZK60zo3T_QSCm5' },
  { title: 'AI Propters', issuer: 'Dubai Future Foundation - 2025', link: 'https://omp.dub.ai/certificate/y0AgS9ElH2tu#' },
  { title: 'Data Science', issuer: 'youtube - 2023', link: 'https://youtu.be/ua-CiDNNj30?si=s25TAhPuRBIqLqRd' },
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-16 px-6 ">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text mb-4">
          My Certificates
        </h2>
        <p className="text-gray-300">Certifications and courses I've successfully completed</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((c, i) => (
          <motion.a
            key={i}
            href={c.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            viewport={{ once: true }}
            className="block p-6 rounded-2xl shadow-lg bg-gradient-to-tr from-purple-700/30 via-indigo-700/30 to-purple-600/20 hover:scale-105 hover:shadow-purple-500/50 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">{c.title}</h3>
            <p className="text-gray-300">{c.issuer}</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mt-4 inline-flex items-center gap-2 text-white font-medium bg-gradient-to-r from-purple-500 to-indigo-400 px-4 py-2 rounded-full cursor-pointer"
            >
              View Certificate <FaArrowRight />
            </motion.div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
