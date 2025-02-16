import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Oswald } from "next/font/google";
import { FC } from "react";

const oswald = Oswald({
  weight: "700",
  subsets: ["latin", "latin-ext"],
});

const Loading: FC = () => {
  return (
    <>
      <section className="relative h-banner-mobile xl:h-banner-desktop">
        <div className="absolute inset-0 w-full h-full bg-gray-800 opacity-50" />
        <div className="absolute inset-0 flex flex-col px-10 md:px-36 xl:px-72 pt-10 md:pt-36 xl:justify-center">
          <div className={`text-4xl md:text-5xl xl:text-6xl font-bold leading-none ${oswald.className}`}>
            <Skeleton className="w-40 h-10 mb-2" />
            <Skeleton className="w-40 h-10 mb-2" />
            <Skeleton className="w-40 h-10" />
          </div>
          <Skeleton className="mt-4 w-96 h-6" />
          <Skeleton className="mt-6 w-40 h-12 rounded-xl" />
        </div>
      </section>
      <section className="bg-gray-950 mx-auto px-10 py-52 flex flex-col self-center">
        <h2 className={`self-center text-2xl md:text-3xl xl:text-4xl font-bold leading-none pb-10 ${oswald.className}`}>
          <Skeleton className="w-40 h-10" />
        </h2>
        <ScrollArea className="flex h-96 whitespace-nowrap overflow-x-auto">
          <div className="flex gap-10 justify-center">
            {Array(2)
              .fill(null)
              .map((_, i) => (
                <div className="grid grid-cols-3 gap-10 w-gallery" key={i}>
                  {Array(4)
                    .fill(null)
                    .map((_, j) => (
                      <Skeleton
                        key={j}
                        className={`bg-black w-fit h-40 ${
                          j === 1 || j === 2 ? "col-span-2 aspect-16/9" : "aspect-4/5"
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

export default Loading;
