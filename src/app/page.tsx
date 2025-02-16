import { CloudinaryImage } from "@/components/cloudinary";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Oswald } from "next/font/google";
// import Image from "next/image";
import { FC } from "react";

const oswald = Oswald({
  weight: "700",
  subsets: ["latin", "latin-ext"],
});

interface ImageData {
  src: string;
  width: number;
  height: number;
}

const images: ImageData[][] = [
  [
    { src: "sample", width: 230, height: 240 },
    { src: "wisata desa/Foto/l2vc0aftuhtbvdhudqb4", width: 499, height: 240 },
    { src: "samples/landscapes/girl-urban-view", width: 499, height: 240 },
    { src: "samples/landscapes/architecture-signs", width: 230, height: 240 },
  ],
  [
    { src: "sample", width: 230, height: 240 },
    { src: "samples/landscapes/nature-mountains", width: 499, height: 240 },
    { src: "samples/landscapes/girl-urban-view", width: 499, height: 240 },
    { src: "samples/landscapes/architecture-signs", width: 230, height: 240 },
  ],
];

const Home: FC = async () => {
  return (
    <>
      <section className="relative h-banner-mobile xl:h-banner-desktop">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50">
          <source src="/videos/Homepage-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <Image
          alt="Blurred background of nature with trees and water"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          height={1080}
          src="/image/Homepage-video.gif"
          width={1920}
        /> */}
        <div className="absolute inset-0 flex flex-col px-10 md:px-36 xl:px-72 pt-10 md:pt-36 xl:justify-center">
          <div
            className={`text-4xl md:text-5xl xl:text-6xl font-bold leading-none ${oswald.className}`}
          >
            <h2>WISATA</h2>
            <h2>DESA</h2>
            <h2>BMJ</h2>
          </div>
          <p className="mt-4 text-lg max-w-lg">
            CFV5+94F, Sudirman number No.2, Jlaget, Randugenengan, Kec. Dlanggu,
            Kabupaten Mojokerto, Jawa Timur 61371
          </p>
          <a
            href="https://www.google.com/maps/dir//CFV5%2B94F+Wisata+Desa+BMJ+Mojopahit,+Sudirman+number+No.2,+Jlaget,+Randugenengan,+Kec.+Dlanggu,+Kabupaten+Mojokerto,+Jawa+Timur+61371"
            target="_blank"
            className="mt-6 px-6 py-3 bg-green-600 text-white rounded-xl w-40"
          >
            Menuju Lokasi
          </a>
        </div>
      </section>
      <section className="bg-gray-950 mx-auto px-10 py-52 flex flex-col self-center">
        <h2
          className={`self-center text-2xl md:text-3xl xl:text-4xl font-bold leading-none pb-10 ${oswald.className}`}
        >
          SEKILAS GALERI
        </h2>
        <ScrollArea className="flex h-96 whitespace-nowrap overflow-x-auto">
          <div className="flex gap-10 justify-center">
            {images.map((row, i) => (
              <div className="grid grid-cols-3 gap-10 w-gallery" key={i}>
                {row.map((image, j) => (
                  <CloudinaryImage
                    key={j}
                    src={image.src}
                    alt={image.src}
                    width={image.width}
                    height={image.height}
                    className={`bg-black w-fit object-cover h-40 ${
                      j === 1 || j === 2
                        ? "col-span-2 aspect-16/9"
                        : "aspect-4/5"
                    } rounded-xl`}
                  />
                ))}
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </>
  );
};

export default Home;
export const dynamic = "force-static"; // Paksa menjadi Static Rendering
