'use client'

import { CldImage } from "next-cloudinary"
import { ReactNode } from "react";

interface CloudyProps {
    src: string;
    className?: string;
    width?: number;
    height?: number;
    alt?: string;
}

export default function Cloudinary({ src, className, width = 1920, height = 1080, alt = "sample" }: CloudyProps) : ReactNode {
    return (
        <CldImage 
            src={src}
            width={width}
            height={height}
            alt={alt}
            className={className}
            crop="auto"

        />
    )
}
