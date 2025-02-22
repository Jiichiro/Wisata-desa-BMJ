"use client";

import { CloudinaryImage } from "@/components/cloudinary";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react"; // Ganti dari motion/react ke framer-motion
import { Oswald } from "next/font/google";
import { useState } from "react";

const oswald = Oswald({
  weight: "700",
  subsets: ["latin", "latin-ext"],
});

const images = [
  {
    src: "wisata desa/Foto/znsizhrtshhjsdcn3azr",
    alt: "Logo Bmj",
    width: 3060,
    height: 4080,
  },
  {
    src: "wisata desa/Foto/kltpi9bjnbyz2tkrnlso",
    alt: "Sumber Air Tirta Wening Kahuripan",
    width: 4080,
    height: 3060,
  },
  {
    src: "wisata desa/Foto/agcd28maz8rlkpsvfp3q",
    alt: "Sertifikasi Cokelat",
    width: 1928,
    height: 2952,
  },
  {
    src: "wisata desa/Foto/aouogqepee9lhmkqskeo",
    alt: "Pintu Masuk pabrik Cokelat",
    width: 4080,
    height: 3060,
  },
  {
    src: "wisata desa/Foto/hrldhbmd1khqfj238gil",
    alt: "Panggung",
    width: 4080,
    height: 4080,
  },
  {
    src: "wisata desa/Foto/c1ivrbuxqy0axjyoltuy",
    alt: "Denah",
    width: 3744,
    height: 2588,
  },
  {
    src: "wisata desa/Foto/icxoph3gkswjks8jnntq",
    alt: "kolam renang dewasa",
    width: 4080,
    height: 3060,
  },
  {
    src: "wisata desa/Foto/c5ulbult7aziaauah4p5",
    alt: "kolam renang anak-anak",
    width: 4080,
    height: 3060,
  },
  {
    src: "wisata desa/Foto/ghtfbz38ny8vhf9fmo4a",
    alt: "kolam renang anak-anak",
    width: 4080,
    height: 3060,
  },
  {
    src: "wisata desa/Foto/vxhfunxncvitm2mf93cb",
    alt: "Area oleh-oleh",
    width: 3060,
    height: 4080,
  },
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
    <div className="container mx-auto px-4 py-6 w-full h-full">
      <h2 className={`text-6xl font-bold text-center mb-4 ${oswald.className}`}>Galeri</h2>
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <Card>
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
      <Dialog
        open={selectedIndex !== null}
        onOpenChange={() => setSelectedIndex(null)}
      >
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
              <>
                <DialogTitle>{images[selectedIndex].alt}</DialogTitle>
                <CloudinaryImage
                  src={images[selectedIndex].src}
                  alt="Selected"
                  className="w-full h-auto rounded-md"
                  width={images[selectedIndex].width}
                  height={images[selectedIndex].height}
                  // initial={{ opacity: 0, scale: 0.9 }}
                  // animate={{ opacity: 1, scale: 1 }}
                  // transition={{ duration: 0.3 }}
                />
              </>
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
