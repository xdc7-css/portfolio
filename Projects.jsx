import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "Random Music website",
    desc: "generate random songs and listen to them on spotify or youtube",
    url: "https://xdc7-css.github.io/random-songs/",
    img: "https://dvna932ue33yp.cloudfront.net/blog-migration/hubfs/474541/must-see-festivals-1.jpg",
  },
  {
    title: "Perfume Store",
    desc: "E-commerce UI",
    url: "https://xdc7-css.github.io/cactus-perfume-store/",
    img: "https://cdn.riah.ae/storage/upload/images/2025/01/20/678dfe4020362.jpg",
  },
  {
    title: "Movies Ranking",
    desc: "my top 3 movies from each genre",
    url: "https://xdc7-css.github.io/my-top3-movies/",
    img: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQcrxeqIIcFKB302jZz6RRwAutv_Ics5OvfmaIlOiv4l4NSnrJFVQjakXjRLIZlTuulAPhfzX2NMZD0EJIiUyl8VnFiYKtMlRnhLiqt6tnwSWJzxe4REcuoQgRME4sVfAb7mVBkGpgZkTYEPFERl5WPVBxxA.jpg?r=f2e",
  },
  {
    title: "CAF CAFE",
    desc: "Premium coffee shop brand website",
    url: "https://xdc7-css.github.io/CAF-CAFE/",
    img: "/caf_cafe.png", // local image from public/
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text mb-4">
          My Projects
        </h2>
        <p className="text-gray-300">Some of my favorite work</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            viewport={{ once: true }}
            className="block rounded-2xl shadow-lg overflow-hidden bg-gradient-to-tr from-purple-700/30 via-indigo-700/30 to-purple-600/20 hover:scale-105 hover:shadow-purple-500/50 transition-all duration-300"
          >
            {/* صورة مصغرة */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* محتوى الكارد */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-300 mb-4">{p.desc}</p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 text-white font-medium bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-full cursor-pointer"
              >
                View Project <FaArrowRight />
              </motion.div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
