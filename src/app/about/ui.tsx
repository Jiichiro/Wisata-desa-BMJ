"use client";

import React from "react";
import { motion } from "motion/react";
import { Users, Clock, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { CloudinaryImage } from "@/components/cloudinary";
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
      icon: <Users className="w-6 h-6" />,
      title: "Expert Guides",
      description:
        "Our team of experienced local guides ensures authentic and immersive experiences in every destination.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description:
        "Travel with peace of mind knowing our dedicated support team is always just a call away.",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Best Value",
      description:
        "We negotiate the best rates and partnerships to offer you unbeatable value for your adventure.",
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
      <motion.div
        className="relative h-[70vh] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <CloudinaryImage
          src="wisata desa/Foto/c6x5fcjvznmmigxprpu4"
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
      </motion.div>

      {/* Our Story Section */}
      <motion.div
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
            <CloudinaryImage
              src="wisata desa/Foto/kzahlyhb4acycsmrwk0a"
              alt="timeline"
              className="rounded-lg shadow-lg w-full self-center"
              width={2000}
              height={3000}
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
        <motion.div
          className="mt-24"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 text-center">
            Why Choose Us
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
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
      </motion.div>
    </div>
  );
};

export default AboutPage;
