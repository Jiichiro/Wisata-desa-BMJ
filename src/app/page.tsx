
import Cloudinary from "@/components/cloudinary";
import { ReactNode } from "react";

export default function Home(): ReactNode {
  return (
    <>
      <section className="relative h-banner">
        <Cloudinary
          alt="Blurred background of nature with trees and water"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          height={1080}
          src="cld-sample-2"
          width={1920}
        />
        <div className="absolute inset-0 flex flex-col px-10 md:px-36 xl:px-72 pt-10 md:pt-36 xl:justify-center">
          <div className="text-4xl md:text-5xl xl:text-6xl font-bold leading-none">
            <h2>WISATA</h2>
            <h2>DESA</h2>
            <h2>BMJ</h2>
          </div>
          <p className="mt-4 text-lg max-w-lg">
          CFV5+94F, Sudirman number No.2, Jlaget, Randugenengan, Kec. Dlanggu, Kabupaten Mojokerto, Jawa Timur 61371
          </p>
          <a href={'https://www.google.com/maps/dir//CFV5%2B94F+Wisata+Desa+BMJ+Mojopahit,+Sudirman+number+No.2,+Jlaget,+Randugenengan,+Kec.+Dlanggu,+Kabupaten+Mojokerto,+Jawa+Timur+61371/@-7.5555276,112.4589283,21z/data=!4m9!4m8!1m0!1m5!1m1!1s0x2e7872f1f5fb5795:0x6b044cb0fa0d1600!2m2!1d112.4589789!2d-7.5555893!3e0?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D'} target="_blank" className="mt-6 px-6 py-3 bg-green-600 text-white rounded-xl w-40">
            Menuju Lokasi
          </a>
        </div>
        <div className="hidden md:block absolute bottom-0 w-full bg-black bg-opacity-75 py-4">
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

      <section className="bg-gray-950 w-full px-10 md:px-36 xl:px-72 py-80">
        <div className="grid grid-cols-3 gap-10">
          <Cloudinary src='sample' alt="" width={230} height={240} className="bg-black object-cover h-40 aspect-4/5 rounded-xl"></Cloudinary>
          <Cloudinary src='samples/landscapes/nature-mountains' alt="" width={499} height={240} className="bg-black object-cover h-40 col-span-2 aspect-20/9 rounded-xl"></Cloudinary>
          <Cloudinary src='samples/landscapes/girl-urban-view' alt="" width={499} height={240} className="bg-black object-cover h-40 col-span-2 aspect-20/9 rounded-xl"></Cloudinary>
          <Cloudinary src='samples/landscapes/architecture-signs' alt="" width={230} height={240} className="bg-black object-cover h-40 aspect-4/5 rounded-xl"></Cloudinary>
        </div>
      </section>
    </>
  );
}
