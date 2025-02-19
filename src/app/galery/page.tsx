import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galery",
};

export default function Page() {
  return (
    <>
      <p className="text-3xl text-center font-bold underline mt-10 ">
        Galery Page
      </p>
    </>
  );
}
