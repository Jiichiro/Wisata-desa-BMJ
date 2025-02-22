"use client";

import { CldImage, CldVideoPlayer } from "next-cloudinary";
import { ReactNode } from "react";

interface CloudyProps {
  src: string;
  className?: string | undefined;
  width?: number | undefined;
  height?: number | undefined;
  alt?: string | undefined;
}

const CloudinaryImage = ({
  src,
  className,
  width = 1920,
  height = 1080,
  alt = "image",
}: CloudyProps): ReactNode => {
  return (
    <CldImage
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
      crop="auto"
      format="auto"
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
