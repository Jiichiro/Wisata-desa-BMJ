"use client";

import React from "react";
import { motion } from "motion/react";
import { Bed, Blocks, CircleParking, Theater, Toilet, WavesLadder } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Timeline } from "flowbite-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const AboutPage = () => {
  const features = [
    {
      icon: <Toilet className="w-6 h-6" />,
      title: "toilet",
    },
    {
      icon: <WavesLadder className="w-6 h-6" />,
      title: "Kolam Renang Anak-anak & Dewasa",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-6 h-6 text-white"><path d="M0 480c0 17.62 14.38 32 32 32h64c17.62 0 32-14.38 32-32V160H0V480zM579.1 288C597 270.6 608 250.6 608 229.1c0-52.88-41.75-93.88-87.88-122.9c-42-26.5-80.63-57.88-112-96.25L400 0l-8.125 10c-31.38 38.38-70 69.75-112 96.25C233.8 135.3 192 176.3 192 229.1C192 250.6 203 270.6 220.9 288H579.1zM64 0c0 0-64 32-64 96v32h128V96C128 32 64 0 64 0zM608 320H192c-17.6 0-32 14.4-32 32v160h64v-64c0-17.62 14.38-32 32-32s32 14.38 32 32v64h64v-72c0-48 48-72 48-72s48 24 48 72V512h64v-64c0-17.62 14.38-32 32-32s32 14.38 32 32v64h64v-160C640 334.4 625.6 320 608 320z" fill="#FFFFFF" stroke="#FFFFFF"/></svg>,
      title: "Masjid",
    },
    {
      icon: <CircleParking className="w-6 h-6" />,
      title: "tempat Parkir",
    },
    {
      icon: <Theater className="w-6 h-6" />,
      title: "Panggung",
    },
    {
      icon: <Blocks className="w-6 h-6" />,
      title: "Tempat Bermain Anak-anak",
    },
    {
      icon: <Bed className="w-6 h-6" />,
      title: "penginapan",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://placehold.co/300x300/1a75ff/ffffff?text=SJ",
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "https://placehold.co/300x300/1a75ff/ffffff?text=MC",
    },
    {
      name: "Emma Rodriguez",
      role: "Lead Travel Curator",
      image: "https://placehold.co/300x300/1a75ff/ffffff?text=ER",
    },
    {
      name: "David Kim",
      role: "Customer Experience",
      image: "https://placehold.co/300x300/1a75ff/ffffff?text=DK",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <motion.section
        className="relative h-[70vh] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="https://res.cloudinary.com/dlw8ltf9c/image/upload/f_auto,q_auto/v1/wisata%20desa/Foto/c6x5fcjvznmmigxprpu4"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/40" />
        <motion.h1
          className="relative text-3xl md:text-5xl text-white font-bold text-center max-w-6xl px-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Wisataku , Wisatamu , Wisatane Wong Akeh
        </motion.h1>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 py-16"
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
      >
        <div className="max-w-4xl mx-auto p-4">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Timeline Wisata Desa BMJ Mojopahit
          </h1>
          <div className=" md:grid md:grid-cols-2 md:gap-14 relative">
            <Image
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/w_2000,h_3000,c_auto/f_auto,q_auto/v1/wisata%20desa/Foto/kzahlyhb4acycsmrwk0a`}
              alt="timeline"
              className="rounded-lg shadow-lg w-full self-center bg-cover"
              width={1000}
              height={3000}
              layout="responsive"
            />
            <Timeline>
              {[
                {
                  year: 2002,
                  title: "Pendirian Wisata Desa BMJ Mojopahit",
                  description:
                    "Didirikan oleh Mulyono di Desa Dlanggu, Mojokerto.",
                },
                {
                  year: 2005,
                  title: "Penambahan Fasilitas Permainan",
                  description:
                    "Penambahan fasilitas permainan anak-anak seperti bebek air dan bom bom car.",
                },
                {
                  year: 2010,
                  title: "Area Camping dan Outbond",
                  description:
                    "Pembangunan area camping dan outbond untuk pengunjung.",
                },
                {
                  year: 2015,
                  title: "Program Edukasi Kakao",
                  description:
                    "Pengenalan program edukasi tentang kakao, termasuk proses pembuatan dan pengemasan.",
                },
                {
                  year: 2020,
                  title: "Renovasi Besar",
                  description:
                    "Renovasi besar-besaran untuk memperbaiki fasilitas dan menambah atraksi baru.",
                },
                {
                  year: 2022,
                  title: "Perayaan 20 Tahun",
                  description:
                    "Perayaan 20 tahun berdirinya Wisata Desa BMJ dengan berbagai acara dan promosi.",
                },
                {
                  year: 2024,
                  title: "Fasilitas Modern",
                  description:
                    "Penambahan fasilitas modern seperti penginapan dan restoran untuk kenyamanan wisatawan.",
                },
              ].map((d, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                      <Timeline.Time>{d.year}</Timeline.Time>
                      <Timeline.Title>{d.title}</Timeline.Title>
                      <Timeline.Body>{d.description}</Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                </motion.div>
              ))}
            </Timeline>
          </div>
        </div>

        {/* Features Section */}
        <motion.section
          className="mt-24"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 text-center">
            Fasilitas Yang Kami Sediakan
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full hover:shadow-lg transition-shadow dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4 text-white">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">
                      {feature.title}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.div
          className="mt-24"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeIn}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full rounded-full mb-4 shadow-lg"
                  width={300}
                  height={300}
                />
                <h3 className="text-xl font-semibold dark:text-white">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
