import { Metadata } from "next";
import Gallery from "./ui";

export const metadata: Metadata = {
  title: "Galery",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Gallery />
    </div>
  );
}
