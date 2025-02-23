import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function Loading() {
  // Generate a grid of 24 skeleton images (3 rows of 8 in desktop view)
  const skeletonItems = Array(24).fill(null);

  return (
    <div className="container mx-auto px-4 py-6 w-full h-full">
      {/* Gallery Title Skeleton */}
      <Skeleton className="h-12 w-48 mx-auto mb-4" />

      {/* Gallery Grid Skeleton */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
        {skeletonItems.map((_, index) => (
          <Card key={index}>
            <CardContent className="p-1">
              <Skeleton className="aspect-square w-full rounded-md" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Optional: Skeleton for Dialog/Modal state */}
      {/*
      <div className="hidden">
        <Skeleton className="fixed inset-0 z-50">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Skeleton className="w-[80vw] h-[80vh] rounded-lg" />
          </div>
        </Skeleton>
      </div>
      */}
    </div>
  );
}