"use client";

import { CloudinaryImage } from "@/components/cloudinary";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react"; // Ganti dari motion/react ke framer-motion
import { useState } from "react";

const images = [
  { src: "wisata desa/Foto/znsizhrtshhjsdcn3azr", alt: "Logo Bmj" },
  { src: "wisata desa/Foto/kltpi9bjnbyz2tkrnlso", alt: "Sumber Ait Tirta Wening Kahuripan" },
  { src: "wisata desa/Foto/agcd28maz8rlkpsvfp3q", alt: "Sertifikasi Cokelat" },
  { src: "wisata desa/Foto/aouogqepee9lhmkqskeo", alt: "Pintu Masuk pabrik Cokelat" },
  { src: "wisata desa/Foto/hrldhbmd1khqfj238gil", alt: "Panggung" },
  { src: "wisata desa/Foto/c1ivrbuxqy0axjyoltuy", alt: "Denah" },
  { src: "wisata desa/Foto/icxoph3gkswjks8jnntq", alt: "kolam renang dewasa" },
  { src: "wisata desa/Foto/c5ulbult7aziaauah4p5", alt: "kolam renang anak-anak" },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-center mb-4">Galeri</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <Card className="bg-white">
              <CardContent className="p-1">
                <CloudinaryImage
                  src={image.src}
                  alt={image.alt}
                  className="rounded-md w-full h-auto"
                  height={200}
                  width={200}
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Modal untuk menampilkan gambar lebih besar */}
      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogOverlay
          className="fixed inset-0 bg-black/80 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          <DialogContent
            // className="relative bg-white rounded-lg p-2 w-full max-w-lg mx-auto sm:max-w-3xl sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-200"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={30} />
            </button>

            {selectedIndex !== null && (
              <motion.img
                src={`https://res.cloudinary.com/dlw8ltf9c/image/upload/v1739676309/${images[selectedIndex].src.replaceAll(" ", "%20")}.jpg`}
                alt="Selected"
                className="w-full h-auto rounded-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}

            {/* Navigasi geser */}
            {selectedIndex !== null && (
              <>
                <button
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
                  onClick={prevImage}
                >
                  <ChevronLeft size={30} />
                </button>
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
                  onClick={nextImage}
                >
                  <ChevronRight size={30} />
                </button>
              </>
            )}
          </DialogContent>
        </DialogOverlay>
      </Dialog>
    </div>
  );
};

export default Gallery;
