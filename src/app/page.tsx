import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Oswald } from "next/font/google";
import Image from "next/image";
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
        <div className="absolute inset-0 w-full h-full bg-black dark:bg-gray-950">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/videos/Homepage-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 flex flex-col px-10 md:px-36 xl:px-72 pt-10 md:pt-36 xl:justify-center text-white">
          <div
            className={`text-4xl md:text-5xl xl:text-6xl font-bold leading-none ${oswald.className}`}
          >
            <h2>WISATA</h2>
            <h2>DESA</h2>
            <h2>BMJ</h2>
          </div>
          <p className="mt-4 text-lg max-w-lg text-gray-200 dark:text-gray-300">
            CFV5+94F, Sudirman number No.2, Jlaget, Randugenengan, Kec. Dlanggu,
            Kabupaten Mojokerto, Jawa Timur 61371
          </p>
          <a
            href="https://www.google.com/maps/dir//CFV5%2B94F+Wisata+Desa+BMJ+Mojopahit,+Sudirman+number+No.2,+Jlaget,+Randugenengan,+Kec.+Dlanggu,+Kabupaten+Mojokerto,+Jawa+Timur+61371"
            target="_blank"
            className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white rounded-xl w-40 transition-colors duration-200"
          >
            Menuju Lokasi
          </a>
        </div>
      </section>
      <section className="grid max-w-screen-xl mx-auto md:grid-cols-2 gap-12 items-center px-6 sm:px-12 md:px-24 lg:px-48 xl:px-72 pt-20 md:pt-28 bg-gray-200 dark:bg-gray-950">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6">
            Wisata Desa BMJ Mojopahit
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3 md:mb-4">
            Merupakan salah satu Wisata Unggulan di Jawa Timur yang berada di
            Desa Randugenengan, Kecamatan Dlanggu Kabupaten Mojokerto - Jawa
            Timur. Wisata Desa mengusung Elemen-Elemen Kerajaan Majapahit di
            dalamnya.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3 md:mb-4">
            Wisata Desa BMJ Mojopahit memiliki ikon unik yaitu Patung Mahapatih
            Gajah Mada yang mendapat REKOR MURI sebagai Patung Gajah Mada
            Terbesar dan Tertinggi dengan total tinggi 23 meter.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3 md:mb-4">
            Wisata Desa BMJ Mojopahit mempunyai daya tarik sendiri bagi
            wisatawan lokal maupun dari luar daerah di Mojokerto dan
            mancanegara.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Kami telah melayani pengunjung selama 21 tahun hingga saat ini.
            Adalah sebuah kebanggaan dan prioritas utama untuk menjaga kualitas
            pelayanan kami kepada Anda dari berbagai daerah.
          </p>
        </div>
        <Image
          src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto/v1/wisata%20desa/Foto/fzqopymhl6fkx0hnzjna`}
          alt="Our story"
          className="rounded-lg shadow-lg w-full max-w-md md:max-w-lg mx-auto"
          width={1080}
          height={1920}
        />
      </section>

      <section className="bg-gray-200 dark:bg-gray-950 mx-auto px-10 py-52 flex flex-col self-center">
        <h2
          className={`self-center text-2xl md:text-3xl xl:text-4xl font-bold leading-none pb-10 text-gray-900 dark:text-white ${oswald.className}`}
        >
          SEKILAS GALERI
        </h2>
        <ScrollArea className="flex h-96 whitespace-nowrap overflow-x-auto rounded-xl">
          <div className="flex gap-10 justify-center">
            {images.map((row, i) => (
              <div className="grid grid-cols-3 gap-10 w-gallery" key={i}>
                {row.map((image, j) => (
                  <Image
                    key={j}
                    src={image.src}
                    alt={image.src}
                    width={image.width}
                    height={image.height}
                    className={`bg-gray-200 dark:bg-gray-800 w-fit object-cover h-40 ${
                      j === 1 || j === 2
                        ? "col-span-2 aspect-16/9"
                        : "aspect-4/5"
                    } rounded-xl transition-colors duration-200 hover:opacity-90`}
                  />
                ))}
              </div>
            ))}
          </div>
          <ScrollBar
            orientation="horizontal"
            className="bg-gray-200 dark:bg-gray-800"
          />
        </ScrollArea>
      </section>
    </>
  );
};

export default Home;
export const dynamic = "force-static";
