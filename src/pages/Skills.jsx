import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  FaNetworkWired,
  FaServer,
  FaUsers,
} from "react-icons/fa";
import { SiCisco } from "react-icons/si";
import { TbRouter } from "react-icons/tb";
import { GiBowArrow } from "react-icons/gi";
import { GrOptimize } from "react-icons/gr";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  const skills = [
    { icon: <FaNetworkWired className="text-rose-500 text-8xl" />, name: "Jaringan Komputer" },
    { icon: <SiCisco className="text-sky-500 text-8xl" />, name: "Cisco" },
    { icon: <TbRouter className="text-orange-500 text-8xl" />, name: "Mikrotik" },
    { icon: <FaServer className="text-stone-700 text-8xl" />, name: "Server & Infrastruktur" },
    { icon: <FaUsers className="text-amber-500 text-8xl" />, name: "Organisasi" },
    { icon: <GiBowArrow className="text-green-600 text-8xl" />, name: "Panahan" },
  ];

  const services = [
    {
      icon: <FaNetworkWired className="text-stone-800 text-6xl mb-4" />,
      title: "Network Engineering",
      description:
        "Mempelajari konfigurasi jaringan komputer, perangkat Cisco dan Mikrotik di jurusan TKJ.",
    },
    {
      icon: <GiArchiveResearch className="text-stone-800 text-6xl mb-4" />,
      title: "Organisasi & Kepemimpinan",
      description:
        "Wakil Sekretaris OSIS — terbiasa dengan koordinasi, administrasi, dan kerja sama tim.",
    },
    {
      icon: <GrOptimize className="text-stone-800 text-6xl mb-4" />,
      title: "Pengembangan Diri",
      description:
        "Aktif di ekstrakurikuler panahan dan selalu terbuka untuk belajar hal baru.",
    },
  ];

  return (
    <>
      {/* Skills Section */}
      <section className="py-16 px-4 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-stone-800 mb-7"
          style={{ fontFamily: "satoshi-black" }}
        >
          Keahlian & Minat
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-zinc-600 leading-relaxed max-w-2xl mx-auto text-base md:text-lg"
          style={{ fontFamily: "satoshi-medium" }}
        >
          Saya fokus mempelajari jaringan komputer di jurusan TKJ, sambil aktif
          berorganisasi sebagai Wakil Sekretaris OSIS dan menekuni ekstrakurikuler
          panahan. Saya percaya setiap pengalaman adalah kesempatan untuk belajar
          dan berkembang.
        </motion.p>

        <Carousel
          plugins={[Autoplay({ delay: 2000 })]}
          className="w-full max-w-3xl mx-auto"
        >
          <CarouselContent className="flex items-center">
            {skills.map((skill, index) => (
              <CarouselItem
                key={index}
                className="basis-1/4 md:basis-1/6 flex flex-col items-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  {skill.icon}
                  <p
                    className="mt-2 text-sm"
                    style={{ fontFamily: "satoshi-medium" }}
                  >
                    {skill.name}
                  </p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-rose-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-stone-800 mb-6"
            style={{ fontFamily: "satoshi-black" }}
          >
            Apa Yang Bisa Saya Lakukan
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 text-zinc-600 leading-relaxed max-w-2xl mx-auto text-base md:text-lg"
            style={{ fontFamily: "satoshi-medium" }}
          >
            Memadukan kemampuan teknis di bidang jaringan komputer dengan soft skill
            organisasi dan kepemimpinan dari pengalaman OSIS.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-rose-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center text-center"
              >
                {service.icon}
                <h5
                  className="mb-3 text-lg md:text-xl text-stone-800"
                  style={{ fontFamily: "satoshi-bold" }}
                >
                  {service.title}
                </h5>
                <p
                  className="text-zinc-600"
                  style={{ fontFamily: "satoshi-medium" }}
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;