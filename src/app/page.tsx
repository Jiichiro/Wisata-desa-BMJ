import { CloudinaryImage } from "@/components/cloudinary";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Oswald } from "next/font/google";
import Link from "next/link";
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
    { src: "wisata desa/Foto/zuegazevm0qishbwkvyd", width: 230, height: 240 },
    { src: "wisata desa/Foto/l2vc0aftuhtbvdhudqb4", width: 499, height: 240 },
    { src: "wisata desa/Foto/wlhpt9zjp61v78sz3ihn", width: 499, height: 240 },
    { src: "wisata desa/Foto/vxhfunxncvitm2mf93cb", width: 230, height: 240 },
  ],
  [
    { src: "wisata desa/Foto/hzxhtstlm1i6g2nzp4pv", width: 230, height: 240 },
    { src: "wisata desa/Foto/icxoph3gkswjks8jnntq", width: 499, height: 240 },
    { src: "wisata desa/Foto/kzahlyhb4acycsmrwk0a", width: 499, height: 240 },
    { src: "wisata desa/Foto/bvkm1a6eeabch4a14ujs", width: 230, height: 240 },
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
            <h1>WISATA</h1>
            <h1>DESA</h1>
            <h1>BMJ</h1>
          </div>
          <p className="mt-4 text-lg max-w-lg text-gray-200 dark:text-gray-300">
            CFV5+94F, Sudirman number No.2, Jlaget, Randugenengan, Kec. Dlanggu,
            Kabupaten Mojokerto, Jawa Timur 61371
          </p>
          <a
            href="https://www.google.com/maps/dir//CFV5%2B94F+Wisata+Desa+BMJ+Mojopahit,+Sudirman+number+No.2,+Jlaget,+Randugenengan,+Kec.+Dlanggu,+Kabupaten+Mojokerto,+Jawa+Timur+61371"
            target="_blank"
            className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white rounded-xl w-40 transition-colors duration-200"
            rel="noopener noreferrer"
          >
            Menuju Lokasi
          </a>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center px-10 md:px-36 xl:px-72 pt-28 bg-gray-200 dark:bg-gray-950">
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3">
            Wisata Desa BMJ Mojopahit
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
            Merupakan salah satu Wisata Unggulan di Jawa Timur yang berada di
            Desa Randugenengan, Kecamatan Dlanggu Kabupaten Mojokerto - Jawa
            Timur. Wisata Desa mengusung Elemen-Elemen Kerajaan Majapahit di
            dalamnya.
          </p>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
            Wisata Desa BMJ Mojopahit memiliki ikon unik yaitu Patung Mahapatih
            Gajah Mada yang mendapat <span className="font-extrabold underline underline-offset-3">REKOR MURI</span> sebagai Patung Gajah Mada
            Terbesar dan Tertinggi dengan total tinggi 23 meter.
          </p>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
            Wisata Desa BMJ Mojopahit mempunyai daya tarik sendiri bagi
            wisatawan lokal maupun dari luar daerah di Mojokerto dan
            mancanegara.
          </p>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Kami telah melayani pengunjung selama 21 tahun hingga saat ini.
            Adalah sebuah kebanggaan dan prioritas utama untuk menjaga kualitas
            pelayanan kami kepada Anda dari berbagai daerah.
          </p>
        </div>
        <CloudinaryImage
          src="wisata desa/Foto/fzqopymhl6fkx0hnzjna"
          alt="Our story"
          className="rounded-lg shadow-lg w-full mx-auto"
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
                  <CloudinaryImage
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
      <section className="flex justify-center px-10 md:px-36 xl:px-72 pb-28 bg-gray-200 dark:bg-gray-950">
        <Card className="w-fit text-center p-16 bg-slate-800">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Ingin tahu lebih tentang Kami?
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Terdapat beberapa fasilitas yang kami sediakan dan Timeline Kami dimulai dari awal didirikan sampai saat ini
          </p>
          <Button className="mt-5 bg-blue-600 font-bold text-white hover:text-black transition-all duration-300">
            <Link href={'/about'}>tentang Kami</Link>
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Card>
      </section>
    </>
  );
};

export default Home;
export const dynamic = "force-static";
