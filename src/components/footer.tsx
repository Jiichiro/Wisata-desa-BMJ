import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
      <footer className="px-8 py-12 w-full bg-gray-900">
        <div className="grid grid-cols-5 gap-8 pb-12 border-b border-gray-800">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">Wisata Desa BMJ</h2>
            <p className="text-gray-400 mb-6">
            CFV5+94F, Sudirman number No.2, Jlaget, Randugenengan, Kec. Dlanggu, Kabupaten Mojokerto, Jawa Timur 61371
            </p>
            <div className="flex space-x-4">
              <Facebook className="fa-brands fa-facebook text-2xl text-gray-400 hover:text-white transition-colors duration-300" />
              <Twitter className="fa-brands fa-twitter text-2xl text-gray-400 hover:text-white transition-colors duration-300" />
              <Linkedin className="fa-brands fa-linkedin text-2xl text-gray-400 hover:text-white transition-colors duration-300" />
              <Instagram className="fa-brands fa-instagram text-2xl text-gray-400 hover:text-white transition-colors duration-300" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Web Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Consulting
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <span className="material-symbols-outlined mr-2">
                  location_on
                </span>
                123 Business Street
              </li>
              <li className="flex items-center text-gray-400">
                <span className="material-symbols-outlined mr-2">phone</span>
                +1 234 567 8900
              </li>
              <li className="flex items-center text-gray-400">
                <span className="material-symbols-outlined mr-2">email</span>
                info@company.com
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-4 text-center text-gray-400">
          <p>&copy; 2025 SMAGU. All rights reserved.</p>
        </div>
      </footer>
  );
}
