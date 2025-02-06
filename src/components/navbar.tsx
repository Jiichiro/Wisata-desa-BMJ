import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

const Navbar = (): ReactNode => {
  return (
    <nav className="flex items-center justify-between py-4 px-72">
        <Link href="/" className="flex items-center space-x-4">
            <Image src="https://placehold.co/40x40/webp" alt="LOGO" width={40} height={40} />
        </Link>
        <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-4">
                <Link href="about" className="hover:underline underline-offset-4 ">About</Link>
                <Link href="galery" className="hover:underline underline-offset-4">Galery</Link>
                <Link href="#" className="hover:underline underline-offset-4">Find accommodation</Link>
                <Link href="#" className="hover:underline underline-offset-4">Plan your trip</Link>
            </div>
            <Search className='h-6 w-6 text-gray-500 hover:text-white transition duration-150'/> 
            <div className="relative">
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
