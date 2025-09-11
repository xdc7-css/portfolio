"use client";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0pwh18s72367", // Service ID
        "template_438tbd4",     // Template ID
        e.target,
        "24uQXoqu7Uw5br-Qx"     // Public Key 
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-16 px-6"
      style={{ background: "transparent" }}
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-4">
          Contact
        </h2>
        <p className="text-gray-300">
          Reach out for collaborations or job opportunities
        </p>
      </div>

      <motion.form
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 glass-card p-6 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <input
          name="name"
          placeholder="Your Name"
          className="p-3 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400"
          required
        />
        <input
          name="email"
          placeholder="Your Email"
          type="email"
          className="p-3 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Message"
          className="p-3 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 md:col-span-2"
          required
        />
        <div className="md:col-span-2 flex justify-center">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-200">
            Send Message
          </button>
        </div>
      </motion.form>
    </section>
  );
}
