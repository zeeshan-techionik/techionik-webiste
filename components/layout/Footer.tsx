"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../Button'
import { motion } from 'framer-motion'


const socialIcons = [
  { src: "/icons/browser.svg", alt: "Browser" },
  { src: "/icons/be.svg", alt: "Be" },
  { src: "/icons/linkdin.svg", alt: "LinkedIn" },
  { src: "/icons/facebook.svg", alt: "Facebook" },
  { src: "/icons/instagram.svg", alt: "Instagram" },
  { src: "/icons/twitter.svg", alt: "Twitter" },
  { src: "/icons/pinterst.svg", alt: "Pinterest" },
];
const Footer = () => {
  const [open, setOpen] = useState<boolean>(true);
  return (
  <footer className="bg-black text-gray-300 text-sm w-full">
      {/* TOP BAR */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Techionik Logo"
                width={242}
                height={42}
                priority
              />
            </Link>
          </div>

          {/* Address Pills */}
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
              <Image src="/icons/canada.svg" alt="canada" width={24} height={24} />
              15 Martin Rd, Dagenham RM8 <br /> 2XH, United Kingdom
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
              <Image src="/icons/usa.svg" alt="usa" width={24} height={24} />
              22a High Street, Southend-On-<br />Sea, England, SS1 1DQ
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
              <Image src="/icons/pakistan.svg" alt="pakistan" width={24} height={24} />
              🇵🇰 224 A Iqbal Avenue Phase 1,<br /> Lahore
            </span>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER LINKS */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-10">
          {/* Company */}
          <div>
            <h4 className="mb-4 gradient-text">Company</h4>
            <ul className="space-y-2 text-sm">
              {["About Us", "FAQs", "Client Reviews", "Why Techionik"].map((i) => (
                <li key={i} className="hover:text-white cursor-pointer">{i}</li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="mb-4 gradient-text">Tech Stack</h4>
            <ul className="space-y-2 text-sm">
              {["Angular", "JavaScript", "Python", "Laravel", "Node JS", "Microsoft Azure"].map((i) => (
                <li key={i} className="hover:text-white cursor-pointer">{i}</li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 gradient-text">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                "AI & Automation",
                "Software Development",
                "Data Science",
                "Business Intelligence",
                "Staff Augmentation",
                "Outsourcing",
                "Digital Marketing",
                "Graphic Designing",
                "UI/UX Designing",
                "Web Development",
              ].map((i) => (
                <li key={i} className="hover:text-white cursor-pointer">{i}</li>
              ))}
            </ul>
          </div>

          {/* Hire Developer */}
          <div>
            <h4 className="mb-4 gradient-text">Hire Developer</h4>
            <ul className="space-y-2 text-sm">
              {[
                "AI & Automation",
                "Software Development",
                "Data Science",
                "Business Intelligence",
                "Staff Augmentation",
                "Outsourcing",
                "Digital Marketing",
                "Graphic Designing",
                "UI/UX Designing",
                "Web Development",
              ].map((i) => (
                <li key={i} className="hover:text-white cursor-pointer">{i}</li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 gradient-text">Resources</h4>
            <ul className="space-y-2 text-sm">
              {["Blogs", "Case Studies", "Contact Us"].map((i) => (
                <li key={i} className="hover:text-white cursor-pointer">{i}</li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="mb-4 gradient-text">Useful Links</h4>
            <ul className="space-y-2 text-sm">
              {["Terms of Services", "Privacy Policy"].map((i) => (
                <li key={i} className="hover:text-white cursor-pointer">{i}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA + CONTACT */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
          {/* Button */}
          <Button
            text="Let’s Talk"
            icon="/icons/arrow-right.svg"
            size="medium"
            radius="full"
            href="#"
            colorClass="bg-[#3a3a3a] text-white hover:bg-[#2e2e2e]"
            className="hidden md:inline-flex"
          />

          {/* Contact Pills */}
          <div className="flex flex-wrap gap-3 text-sm">
            {[
              { icon: "/icons/email.svg", text: "info@techionik.com" },
              { icon: "/icons/canada.svg", text: "+44 744 1396 181" },
              { icon: "/icons/usa.svg", text: "+44 744 1396 181" },
              { icon: "/icons/pakistan.svg", text: "+92 329 2446644" },
            ].map((c, idx) => (
              <span key={idx} className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2">
                <Image src={c.icon} alt={c.text} width={24} height={24} />
                {c.text}
              </span>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-gray-400">
          <p className="text-left md:text-sm">
            © Copyright Techionik. All Rights Reserved<br />
            Developed by Techionik
          </p>

          {/* Partner Logos Scrolling */}
          <div className="overflow-hidden w-full md:w-[50%] h-16 flex items-center">
            <div className="flex animate-scroll gap-6">
              {[
                "/icons/Cluch.svg",
                "/icons/google-review.svg",
                "/icons/upwork.svg",
                "/icons/RMG.svg",
                "/icons/google-firm.svg",
                "/icons/layoffhubai.svg",
                "/icons/Pergola-Plus.svg",
                "/icons/accoutions.svg",
                "/icons/RMG.svg",
                "/icons/Assetra.svg",
              ].map((src, idx) => (
                <Image key={idx} src={src} alt="Partner" width={80} height={40} className="h-8 sm:h-10" />
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-1">
            {socialIcons.map((icon) => (
              <div key={icon.alt} className="flex h-8 w-8 cursor-pointer items-center justify-center">
                <Image src={icon.src} alt={icon.alt} width={34} height={34} className="h-[34px] w-[34px]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COOKIE BAR */}
 {open &&( <div className="fixed bottom-0 w-full border-t border-white/20 bg-gray-900/80 hover:bg-gray-900/90 px-4 py-2 backdrop-blur-md z-200">
{open && (
  <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-3 text-xs text-gray-400 text-center md:text-left"
  >
    <p>
      By continuing to use this site, you agree to our{' '}
      <span className="text-orange-500 cursor-pointer">cookie policy</span> and{' '}
      <span className="text-orange-500 cursor-pointer">privacy policy</span>.
    </p>
    <button 
      onClick={() => setOpen(false)} 
      className="flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-2 text-white font-medium text-base hover:bg-emerald-800 pointer-events-auto"
    >
      Got it
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </button>
  </motion.div>
)}

</div>)}
    </footer>
  )
}

export default Footer
