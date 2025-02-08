import Image from "next/image";
import { ReactNode } from "react";
import {  } from "next/font/google";

export default function Home(): ReactNode {
  return (
    <div className="relative h-banner">
      <Image
        alt="Blurred background of nature with trees and water"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        height="1080"
        src="https://placehold.co/1200x750/webp"
        width="1920"
      />
      <div className="absolute inset-0 flex flex-col px-72 justify-center">
        <div className="text-6xl font-bold leading-none">
          <h2>IF</h2>
          <h2>YOU</h2>
          <h2>SEEK</h2>
        </div>
        <p className="mt-4 text-lg max-w-lg">
          Across our incredible country, you can find everything from untamed
          wilderness to rich culture. There is more to find in Aotearoa New
          Zealand.
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
    </div>
  );
}
