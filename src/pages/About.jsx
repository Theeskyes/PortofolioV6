import React from "react";
import myImg from '../assets/pfp.jpg';
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col -mt-10 md:flex-row items-center justify-center px-8 md:px-30 py-16 bg-white">
      
      {/* Left: Image */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-10 md:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src={myImg}
          alt="Wanianse Indri Al-Imamah"
          className="w-90 md:w-94 h-90 md:h-94 object-cover border-7 border-stone-900 rounded-full shadow-lg"
        />
      </motion.div>

      {/* Right: Text */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-3xl md:text-4xl mb-4 text-stone-800"
          style={{ fontFamily: 'satoshi-black' }}
        >
          Tentang Saya
        </h2>
        <p
          className="text-zinc-600 leading-relaxed mb-6"
          style={{ fontFamily: 'satoshi-medium' }}
        >
          Halo! Saya <span className="font-semibold text-stone-800">Wanianse Indri Al-Imamah</span>, 
          seorang pelajar aktif di jurusan Teknik Komputer Jaringan (TKJ). Saat ini saya 
          dipercaya sebagai Wakil Sekretaris OSIS, yang membantu saya belajar tentang 
          kepemimpinan, kerja sama tim, serta kemampuan berorganisasi.
        </p>
        <p
          className="text-zinc-600 leading-relaxed mb-6"
          style={{ fontFamily: 'satoshi-medium' }}
        >
          Saya memiliki minat yang beragam, mulai dari teknologi jaringan komputer 
          hingga ekstrakurikuler seperti panahan. Saya dikenal sebagai pribadi yang 
          teliti, kreatif, dan memiliki rasa ingin tahu yang tinggi — selalu siap 
          belajar dan berkembang dari setiap pengalaman.
        </p>

        {/* Highlights Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          viewport={{ once: true }}
        >
          {[
            { title: "Network Engineering", desc: "Mempelajari jaringan komputer dan konfigurasi perangkat di jurusan TKJ." },
            { title: "Organisasi & Kepemimpinan", desc: "Wakil Sekretaris OSIS — berpengalaman dalam koordinasi dan kerja tim." },
            { title: "Aktif & Berprestasi", desc: "Aktif di ekstrakurikuler panahan dan terus berkembang di berbagai bidang." }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-orange-100 p-4 rounded-lg shadow"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              <h3
                className="text-stone-800 text-lg"
                style={{ fontFamily: 'satoshi-bold' }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm text-zinc-600 mt-2"
                style={{ fontFamily: 'satoshi-medium' }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About; 