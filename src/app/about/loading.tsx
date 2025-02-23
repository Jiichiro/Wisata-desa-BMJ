import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section Skeleton */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <Skeleton className="absolute inset-0 w-full h-full" />
        <Skeleton className="relative w-3/4 h-12 max-w-6xl" />
      </section>

      {/* Our Story Section Skeleton */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto p-4">
          <Skeleton className="h-10 w-3/4 mx-auto mb-8" />
          
          <div className="md:grid md:grid-cols-2 md:gap-14 relative">
            {/* Image Skeleton */}
            <Skeleton className="w-full h-[600px] rounded-lg" />
            
            {/* Timeline Skeleton */}
            <div className="space-y-8 mt-8 md:mt-0">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex gap-4">
                  <Skeleton className="h-4 w-16" />
                  <div className="flex-1 space-y-3">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section Skeleton */}
        <section className="mt-24">
          <Skeleton className="h-10 w-2/3 mx-auto mb-12" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <Card key={index} className="h-full dark:bg-gray-800">
                <CardContent className="p-6">
                  <Skeleton className="w-12 h-12 rounded-full mb-4" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}