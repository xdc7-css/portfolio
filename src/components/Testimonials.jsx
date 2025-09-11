import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const quotes = [

  { text: "One day, I am gonna grow wings", source: "Radiohead - Let Down", year: "1997 (Song)" },
  { text: "But I see her in the back of my mind, all the time.", source: "Billie Eilish - Wildflower", year: "2020 (Song)" },
  { text: "I had all and then most of you, some and now none of you.", source: "Lord Huron - The Night We Met", year: "2015 (Song)" },
  { text: "The winner takes it all, the loser standing small.", source: "ABBA - The Winner Takes It All", year: "1980 (Song)" },

  { text: "Love is the one thing that transcends time and space.", source: "Interstellar", year: "2014 (Movie)" },

  { text: "Hope is a good thing, maybe the best of things, and no good thing ever dies.", source: "The Shawshank Redemption", year: "1994 (Movie)" },
  { text: "To infinity and beyond!", source: "Toy Story", year: "1995 (Movie)" },
 
  { text: "Revenge is a dish best served cold.", source: "Reservoir Dogs", year: "1992 (Movie)" },
  { text: "I am the one who knocks.", source: "Walter White - Breaking Bad", year: "2008 (Series)" },
  { text: "Power resides where men believe it resides", source: "Lord Varys - Game of Thrones", year: "2011 (Series)" },
  { text: "The night is dark and full of terrors.", source: "Melisandre - Game of Thrones", year: "2011 (Series)" },

];

export default function InspirationCarousel() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: { x: { repeat: Infinity, repeatType: "loop", duration: 50, ease: "linear" } },
    });
  }, [controls]);

  return (
    <section
      id="inspiration"
      className="py-16 px-6 overflow-hidden bg-gradient-to-b from-transparent to-black/20"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text mb-4">
          Quotes & Inspiration
        </h2>
        <p className="text-gray-300">
          Words from songs, movies, series that inspire me
        </p>
      </div>

      <motion.div
        className="flex gap-6 w-full cursor-grab"
        animate={controls}
        whileHover={{ animationPlayState: "paused" }}
      >
        {quotes.concat(quotes).map((q, i) => (
          <div
            key={i}
            className="min-w-[260px] p-6 text-center flex flex-col justify-center items-center 
                       bg-gradient-to-tr from-purple-700/30 via-indigo-700/30 to-purple-600/20 
                       backdrop-blur-md border border-white/10 rounded-xl shadow-lg"
          >
            <p className="text-gray-200 italic mb-4">"{q.text}"</p>
            <span className="text-xs text-gray-400 mt-1">{q.source}</span>
            <span className="text-xs text-gray-400 mt-1">{q.year}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
