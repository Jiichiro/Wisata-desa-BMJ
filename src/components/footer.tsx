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
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={24}
                width={24}
              >
                <path
                  d="M16.8217 5.1344C16.0886 4.29394 15.6479 3.19805 15.6479 2H14.7293M16.8217 5.1344C17.4898 5.90063 18.3944 6.45788 19.4245 6.67608C19.7446 6.74574 20.0786 6.78293 20.4266 6.78293V10.2191C18.645 10.2191 16.9932 9.64801 15.6477 8.68211V15.6707C15.6477 19.1627 12.8082 22 9.32386 22C7.50043 22 5.85334 21.2198 4.69806 19.98C3.64486 18.847 2.99994 17.3331 2.99994 15.6707C2.99994 12.2298 5.75592 9.42509 9.17073 9.35079M16.8217 5.1344C16.8039 5.12276 16.7861 5.11101 16.7684 5.09914M6.9855 17.3517C6.64217 16.8781 6.43802 16.2977 6.43802 15.6661C6.43802 14.0734 7.73249 12.7778 9.32394 12.7778C9.62087 12.7778 9.9085 12.8288 10.1776 12.9124V9.40192C9.89921 9.36473 9.61622 9.34149 9.32394 9.34149C9.27287 9.34149 8.86177 9.36884 8.81073 9.36884M14.7244 2H12.2097L12.2051 15.7775C12.1494 17.3192 10.8781 18.5591 9.32386 18.5591C8.35878 18.5591 7.50971 18.0808 6.98079 17.3564"
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
