import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <section className="relative h-banner-mobile xl:h-banner-desktop">
        <div className="absolute inset-0 w-full h-full bg-black dark:bg-gray-950">
          <Skeleton className="w-full h-full" />
        </div>
        <div className="absolute inset-0 flex flex-col px-10 md:px-36 xl:px-72 pt-10 md:pt-36 xl:justify-center text-white">
          <Skeleton className="w-40 h-10 mb-2" />
          <Skeleton className="w-40 h-10 mb-2" />
          <Skeleton className="w-40 h-10" />
          <Skeleton className="mt-4 w-80 h-6" />
          <Skeleton className="mt-6 w-40 h-10 rounded-xl" />
        </div>
      </section>
      <section className="grid md:grid-cols-2 gap-12 items-center px-10 md:px-36 xl:px-72 pt-28 bg-gray-200 dark:bg-gray-950">
        <div>
          <Skeleton className="w-60 h-8 mb-3" />
          <Skeleton className="w-full h-6 mb-2" />
          <Skeleton className="w-full h-6 mb-2" />
          <Skeleton className="w-full h-6 mb-2" />
          <Skeleton className="w-full h-6" />
        </div>
        <Skeleton className="w-full h-80 rounded-lg" />
      </section>
      <section className="bg-gray-200 dark:bg-gray-950 mx-auto px-10 py-52 flex flex-col self-center">
        <Skeleton className="self-center w-60 h-10 mb-10" />
        <div className="flex h-96 whitespace-nowrap overflow-x-auto rounded-xl gap-10">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="w-96 h-40 rounded-xl" />
          ))}
        </div>
      </section>
      <section className="w-full bg-gray-200 dark:bg-gray-900">
      <div className="container mx-auto p-6 max-w-6xl bg-gray-400 dark:bg-gray-800 shadow-lg rounded-xl">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
          Daftar Tiket
        </h2>
        <div className="md:grid md:grid-cols-3 gap-4">
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="flex flex-col p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-gray-300 dark:border-gray-600 dark:bg-gray-700 w-full max-w-md mx-auto justify-between mb-4">
              <Skeleton className="h-6 w-3/4 mx-auto mb-2 rounded-md" />
              <Skeleton className="h-4 w-5/6 mx-auto mb-2 rounded-md" />
              <Skeleton className="h-6 w-1/2 mx-auto rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </section>
      <section className="flex justify-center px-10 md:px-36 xl:px-72 pb-28 bg-gray-200 dark:bg-gray-950">
        <div className="w-fit text-center p-16 bg-slate-800">
          <Skeleton className="w-80 h-10 mb-4" />
          <Skeleton className="w-60 h-6 mb-2" />
          <Skeleton className="w-60 h-6 mb-5" />
          <Skeleton className="w-40 h-10 rounded-xl" />
        </div>
      </section>
    </>
  );
}
