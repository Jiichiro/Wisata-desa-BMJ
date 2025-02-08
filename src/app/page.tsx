import Image from "next/image";
import { ReactNode } from "react";

export default function Home(): ReactNode {
  return (
    <>
      <section className="relative h-banner">
        <Image
          alt="Blurred background of nature with trees and water"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          height="1080"
          src="https://placehold.co/1200x750/webp"
          width="1920"
        />
        <div className="absolute inset-0 flex flex-col px-72 justify-center">
          <div className="text-6xl font-bold leading-none">
            <h2>WISATA</h2>
            <h2>DESA</h2>
            <h2>BMJ</h2>
          </div>
          <p className="mt-4 text-lg max-w-lg">
          CFV5+94F, Sudirman number No.2, Jlaget, Randugenengan, Kec. Dlanggu, Kabupaten Mojokerto, Jawa Timur 61371
          </p>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-xl w-3/12">
            Start seeking
          </button>
        </div>
        <div className="absolute bottom-0 w-full bg-black bg-opacity-75 py-4">
          <div className="flex justify-center space-x-4">
            <a className="text-white hover:underline" href="#">
              North Island destinations
            </a>
            <span className="text-white">|</span>
            <a className="text-white hover:underline" href="#">
              South Island destinations
            </a>
            <span className="text-white">|</span>
            <a className="text-white hover:underline" href="#">
              Explore all regions
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 w-full py-80">
        <div className="grid grid-cols-3 gap-10 w-full px-72 mx-auto">
          <Image src={'https://placehold.co/300x300/webp'} alt="" width={230} height={240} className="bg-black w-full h-60 aspect-square rounded-xl"></Image>
          <Image src={'https://placehold.co/720x480/webp'} alt="" width={499} height={240} className="bg-black w-full h-60 col-span-2 aspect-[2/1] rounded-xl"></Image>
          <Image src={'https://placehold.co/720x480/webp'} alt="" width={499} height={240} className="bg-black w-full h-60 col-span-2 aspect-[2/1] rounded-xl"></Image>
          <Image src={'https://placehold.co/300x300/webp'} alt="" width={230} height={240} className="bg-black w-full h-60 aspect-square rounded-xl"></Image>
        </div>
      </section>
    </>
  );
}
