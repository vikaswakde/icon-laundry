'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 md:max-h-[6rem] right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white bg-opacity-70 backdrop-blur-md shadow-md'
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-3 mb-10 flex items-center justify-between">
        <Link href="/">
          <Image src="https://iconlaundry.in/assets/img/logo1.png" alt="Icon Laundry" width={120} height={20} />
        </Link>
        <div className="hidden md:flex space-x-6">
          <NavLink href="#aboutus" isScrolled={isScrolled}>About Us</NavLink>
          <NavLink href="#why_choose" isScrolled={isScrolled}>Why Us?</NavLink>
          <NavLink href="#laundryservice" isScrolled={isScrolled}>Our Services</NavLink>
          <NavLink href="#requestservice" isScrolled={isScrolled}>Contact Us</NavLink>
        </div>
        <button className={`px-4 py-2 rounded-full transition-colors ${
          isScrolled
            ? 'bg-[#206d73] text-white hover:bg-opacity-90'
            : 'bg-white text-black hover:bg-gray-200'
        }`}>
          Book Now
        </button>
      </nav>
    </header>
  );
}

function NavLink({ href, children, isScrolled }: { href: string; children: React.ReactNode; isScrolled: boolean }) {
  return (
    <Link href={href} className={`transition-colors ${
      isScrolled ? 'text-[#206d73] hover:text-opacity-80' : 'text-white hover:text-gray-300'
    }`}>
      {children}
    </Link>
  );
}