"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdDynamicFeed, MdMedicalServices } from "react-icons/md"
import { IoMenu } from "react-icons/io5";
import { FaNetworkWired } from "react-icons/fa6";
import {FaBell, } from 'react-icons/fa';
import { AiFillHome, } from 'react-icons/ai';

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='stickey'>
    <nav className="flexBetween max-container padding-container static z-30 py-2 shadow ">
      <Link href="/">
        <Image src="/logo4.jpg" alt="logo" width={80} height={30} />
      </Link>

      {/* Mobile menu button */}
      <div className="lg:hidden ">
        <IoMenu className="text-2xl cursor-pointer" onClick={toggleMenu} />
      </div>
       

      <ul className="hidden lg:flex h-full gap-12 text-cyan-700 w-[540px] flex-end">
        <NavItem href="/" icon={<AiFillHome />} label="Home" />
        <NavItem href="/feed" icon={<MdDynamicFeed />} label="Feed" />
        <NavItem href="/services" icon={<MdMedicalServices />} label="Initiatives" />
        <NavItem href="/messages" icon={<FaNetworkWired />} label="Partnerships" />
        <NavItem href="/notifications" icon={<FaBell />} label="Events" />
      </ul>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden  absolute top-16 right-2 bg-slate-50 rounded-lg p-4 shadow-md z-30">
          <ul className="flex flex-col gap-2 ">
            <NavItem href="/" icon={<AiFillHome />} label="Home" />
            <NavItem href="/feed" icon={<MdDynamicFeed />} label="Feed" />
            <NavItem href="/services" icon={<MdMedicalServices />} label="Initiatives" />
            <NavItem href="/messages" icon={<FaNetworkWired />} label="Partnerships" />
            <NavItem href="/notifications" icon={<FaBell />} label="Events" />
          </ul>
        </div>
      )}
    </nav>
    </div>
  );
}

const NavItem:React.FC<NavItemProps>  = ({ href, icon, label }) => (
  <Link href={href}>
    <span className="flex flex-col items-center  text-cyan-700">
      {icon}
      <h3 className='font-serif'>{label}</h3>
    </span>
  </Link>
);

export default Navbar;