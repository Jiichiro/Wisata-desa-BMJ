import { Facebook, Instagram, Mail, MapPin, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-8 py-12 w-full bg-gray-800">
      <div className="flex flex-col md:grid md:grid-cols-4 gap-8 pb-12 border-b border-gray-950">
        <div className="col-span-2">
          <h2 className="text-2xl font-bold text-white mb-4">
            Wisata Desa BMJ
          </h2>
          <p className="text-gray-400 mb-6">
            Jika anda penasaran apa yang telah kami lakukan selama ini, anda bisa melihat melalui postingan media sosial kami yang tertera dibawah ini
          </p>
          <div className="flex space-x-4">
            <a href="https://m.facebook.com/wisatadesa.dlanggu/">
              <Facebook className="text-2xl text-gray-400 hover:text-white transition-colors duration-300" />
            </a>
            <a href="https://www.tiktok.com/@wisatadesa.dlanggu">
              <svg
                className="text-gray-400 hover:text-white transition-colors"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path
                  d="M16.822 5.134c-.733-.84-1.174-1.936-1.174-3.134h-1.118M16.822 5.134c.668.766 1.573 1.324 2.603 1.543.32.07.654.107.998.107V10.22c-1.782 0-3.434-.571-4.78-1.537V15.671c0 3.493-2.839 6.33-6.323 6.33-1.823 0-3.47-.78-4.626-2.02-1.053-1.133-1.698-2.647-1.698-4.308 0-3.442 2.756-6.247 6.171-6.322M16.822 5.134c-.017-.012-.035-.023-.052-.035M6.986 17.352c-.343-.473-.547-1.054-.547-1.685 0-1.593 1.295-2.889 2.886-2.889 1.297 0 2.468.44 2.737.523V9.402c-.278-.037-.561-.062-.847-.062-1.19 0-1.604.027-2.017.029M14.724 2H12.21V15.778c-.056 1.542-1.327 2.782-2.88 2.782-1.965 0-3.814-1.48-3.343-2.805"
                  stroke="currentColor"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="https://www.instagram.com/wisatadesa.dlanggu/">
              <Instagram className="text-2xl text-gray-400 hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>
        <div className="col-span-2">
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2 gap-3">
            <li className="flex items-center text-gray-400 gap-3">
              <MapPin />
              Jl Sudirman number No.2, Mojokerto, Jawa Timur 61371
            </li>
            <li className="flex items-center text-gray-400 gap-3">
              <PhoneCall />
              +62 857-4957-4107
            </li>
            <li className="flex items-center text-gray-400 gap-3">
              <Mail />
              timkreatifwd@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-4 text-center text-gray-400">
        <p>&copy; 2025 Wisata Desa BMJ Mojopahit. All rights reserved.</p>
      </div>
    </footer>
  );
}
