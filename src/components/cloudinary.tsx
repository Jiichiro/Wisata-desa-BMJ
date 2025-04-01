"use client";

import { CldImage, CldVideoPlayer } from "next-cloudinary";

interface CloudyiMageProps {
  src: string;
  className?: string | undefined;
  width?: number | undefined;
  height?: number | undefined;
  alt?: string | undefined;
}
interface CloudyVideoProps {
  src: string;
  className?: string | undefined;
  width?: number | undefined;
  height?: number | undefined;
}

const CloudinaryImage = ({
  src,
  className,
  width = 1920,
  height = 1080,
  alt = "image",
}: CloudyiMageProps) => {
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
}: CloudyVideoProps) => {
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
