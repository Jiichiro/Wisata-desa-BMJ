import { Metadata } from "next";
import AboutPage from "./ui";

export const metadata:Metadata = {
  title: 'About',
  keywords: ['tentang bmj', 'apa itu wisata desa bmj']
}

export default function About() {
  return (
    <AboutPage />
  )
}