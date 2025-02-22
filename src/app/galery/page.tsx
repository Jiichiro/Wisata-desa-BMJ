import { Metadata } from "next";
import Gallery from "./ui";

export const metadata: Metadata = {
  title: "Galery",
};

export default function Page() {
  return (
    <div className="min-h-screen px-10 md:px-36 xl:px-72 py-6 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 w-full h-full transition-colors duration-200">
      <Gallery />
    </div>
  );
}
