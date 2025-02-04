import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: 'About'
}

export default function Page():ReactNode {
      return (
        <>
          <p className="text-3xl text-center font-bold underline mt-10 ">About Page</p>
        </>
      );
}