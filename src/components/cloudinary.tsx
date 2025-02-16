"use client";

import { CldImage, CldVideoPlayer } from "next-cloudinary";
import { ReactNode } from "react";

interface CloudyProps {
  src: string;
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
}

const CloudinaryImage = ({
  src,
  className = "",
  width = 1920,
  height = 1080,
  alt = "sample",
}: CloudyProps): ReactNode => {
  return (
    <CldImage
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
      crop="auto"
    />
  );
};

const CloudinaryVideo = ({
  src,
  className = "",
  width = 1920,
  height = 1080,
}: CloudyProps): ReactNode => {
  return (
    <div className={className}>
      <CldVideoPlayer
        className="absolute inset-0 w-full h-full object-cover"
        width={height}
        height={width}
        src={src}
        autoPlay
        loop
        muted
        playsinline
      />
    </div>
  );
};

export { CloudinaryImage, CloudinaryVideo };
