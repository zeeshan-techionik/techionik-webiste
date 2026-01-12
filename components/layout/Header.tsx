"use client";
import Link from "next/link";
import Image from "next/image";
import NavMenu from "./navbar/Navbar";
import Button from "../Button";
import { useState } from "react";
import { navLinks } from "@/data/navLinks";
import { useEffect } from "react";


const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
   <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 sm:bg-surface backdrop-blur-md shadow-lg
      ${scrolled ? "bg-surface backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
<div className="max-w-[3840px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-4 flex items-center justify-between">

    <div className="text-2xl font-bold text-primary">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Techionik Logo"
          width={230}
          height={42}
          priority
        />
      </Link>
    </div>
    <NavMenu navLinks={navLinks} />
    


      <Button
              text="View All Blogs"
              icon="/icons/arrow-right.svg"
              size="medium"
              radius="full"
          
              href="#"
         variant="glass"
            className="hidden md:inline-flex"
            />
  </div>
</header>
  );
};

export default Header;
