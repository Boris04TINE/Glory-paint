
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

export default function GloryPaintHome() {
  useEffect(() => {
    document.title = "Glory Paint | Peinture & Décoration Murale";
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfaf6] text-[#1c1c1c] font-sans">
      <header className="bg-[#ff6600] text-white py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo glory paint.png" alt="Glory Paint Logo" className="h-12 w-auto" />
            <h1 className="text-2xl font-bold">Glory Paint</h1>
          </div>
          <nav className="space-x-6 text-lg">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#realisations" className="hover:underline">Réalisations</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <section className="text-center py-20 px-4 bg-gradient-to-r from-[#ff6600] via-[#ffb300] to-[#00c4a6] text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Donnez vie à vos murs avec style
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-xl md:text-2xl"
        >
          Peinture professionnelle et décoration murale sur mesure.
        </motion.p>
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Button className="bg-white text-[#ff6600] hover:bg-orange-100 font-semibold px-6 py-3 rounded-full">
            Demandez un devis
          </Button>
          <a
            href="https://wa.me/221771234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white hover:bg-green-600 font-semibold"
          >
            <PhoneCall className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </section>

      <section id="services" className="py-20 px-4 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Nos Services</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Peinture intérieure", desc: "Des murs éclatants et harmonieux pour chaque pièce." },
            { title: "Décoration murale", desc: "Des designs artistiques pour sublimer votre intérieur." },
            { title: "Rénovation", desc: "Redonnez une seconde vie à vos espaces." },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-[#ff6600]"
            >
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="realisations" className="py-20 bg-[#f8f4ef] px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Nos Réalisations</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((n) => (
            <motion.div
              key={n}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <img
                src={`/images/realisation-${n}.jpg`}
                alt={`Projet ${n}`}
                className="w-full h-60 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-20 px-4 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8">Contactez-nous</h3>
        <form
          className="bg-white p-6 rounded-2xl shadow-md space-y-4"
          method="POST"
          action="mailto:glorypaint.sn@gmail.com"
          encType="text/plain"
        >
          <input
            type="text"
            name="Nom"
            placeholder="Nom"
            className="w-full border rounded-lg px-4 py-2"
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-2"
          />
          <textarea
            name="Message"
            rows="4"
            placeholder="Votre message"
            className="w-full border rounded-lg px-4 py-2"
          ></textarea>
          <Button className="bg-[#ff6600] hover:bg-[#e65c00] text-white px-6 py-2 rounded-full">
            Envoyer
          </Button>
        </form>
      </section>

      <footer className="bg-[#1c1c1c] text-white text-center py-6">
        <p>&copy; 2025 Glory Paint. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
