'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const defaultTextColor = 'text-gray-300';
  const hoverTextColor = 'text-white';
  const textSizeClass = 'text-base font-medium';

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Add a small delay to ensure the page is fully loaded
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Fallback: try to scroll to the section by ID without hash
        const fallbackTarget = document.getElementById(href.replace('#', ''));
        if (fallbackTarget) {
          fallbackTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 100);
  };

  return (
    <a href={href} onClick={handleClick} className={`group relative inline-block overflow-hidden h-6 flex items-center ${textSizeClass}`}>
      <div className="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2">
        <span className={defaultTextColor}>{children}</span>
        <span className={hoverTextColor}>{children}</span>
      </div>
    </a>
  );
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll detection for mobile navbar transformation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoElement = (
    <div className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 flex items-center justify-center flex-shrink-0">
      <Image 
        src="/crate logos/favicon-128x128.png" 
        alt="CRATE Logo" 
        width={24} 
        height={24} 
        className="object-contain w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    </div>
  );

  // Logo + Name as Home link
  const logoWithNameElement = (
    <a href="#home" onClick={(e) => {
      e.preventDefault();
      setTimeout(() => {
        const target = document.querySelector('#home');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          const fallbackTarget = document.getElementById('home');
          if (fallbackTarget) {
            fallbackTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 100);
    }} className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3 group cursor-pointer flex-shrink-0 min-w-0">
      {logoElement}
      <span className="text-white font-bold text-sm sm:text-base md:text-lg group-hover:text-gray-200 transition-colors duration-200 whitespace-nowrap flex-shrink-0">CRATE</span>
    </a>
  );

  // Updated nav links
  const navLinksData = [
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  // CTA and optional Sign In
  const ctaButtonElement = (
    <div className="relative group w-full sm:w-auto">
      <div className="absolute inset-0 -m-1 rounded-lg hidden sm:block bg-gray-100 opacity-20 filter blur-sm pointer-events-none transition-all duration-300 ease-out group-hover:opacity-40 group-hover:blur-md group-hover:-m-2"></div>
      <button className="relative z-10 px-5 py-2 text-sm font-semibold text-black bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg hover:from-gray-200 hover:to-gray-400 transition-all duration-200 w-full sm:w-auto whitespace-nowrap">
        Book a Demo
      </button>
    </div>
  );
  const signInButtonElement = (
    <button 
      onClick={() => router.push('https://app.cratedashboard.com/login')}
      className="group relative px-5 py-2 text-sm border border-[#333] bg-[rgba(31,31,31,0.62)] text-gray-300 rounded-lg hover:border-white/50 hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-all duration-200 w-full sm:w-auto font-medium cursor-pointer transform hover:scale-105 active:scale-95 whitespace-nowrap"
    >
      <span className="relative z-10">Sign In</span>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
    </button>
  );

  return (
    <>
      {/* Desktop Navbar */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[99999] hidden sm:flex items-center px-6 py-3 backdrop-blur-sm rounded-full border border-[#333] bg-[#1f1f1f57] transition-all duration-300 shadow-lg pointer-events-auto">
        <div className="flex items-center justify-between w-full gap-x-8">
          <div className="flex items-center">
            {logoWithNameElement}
          </div>
          <nav className="flex items-center space-x-6 text-sm">
            {navLinksData.map((link) => (
              <AnimatedNavLink key={link.href} href={link.href}>
                {link.label}
              </AnimatedNavLink>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {signInButtonElement}
            {ctaButtonElement}
          </div>
        </div>
      </header>

      {/* Mobile Navbar */}
      <header className="fixed top-0 left-0 right-0 z-[99999] sm:hidden pointer-events-auto max-w-full">
        <div className={`transition-all duration-500 ease-out transform max-w-full ${
          isScrolled
            ? 'mx-3 mt-2 rounded-full backdrop-blur-sm bg-[#1f1f1f90] border border-[#333] shadow-lg scale-100'
            : isOpen
              ? 'mx-0 mt-0 rounded-none bg-black/95 backdrop-blur-sm border-transparent shadow-none scale-100'
              : 'mx-0 mt-0 rounded-none backdrop-blur-none bg-transparent border-transparent shadow-none scale-100'
        }`}>
          <div className="flex items-center justify-between px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 min-h-[50px] sm:min-h-[56px] md:min-h-[60px] w-full">
            {/* Logo + Name as Home link */}
            {logoWithNameElement}
            {/* Hamburger Menu */}
            <button
              className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 text-white focus:outline-none transition-transform duration-200 hover:scale-110 active:scale-95 flex-shrink-0 ml-2"
              onClick={toggleMenu}
              aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            >
              <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6">
                <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                  <span className={`absolute block h-0.5 w-5 sm:w-6 bg-current transform transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}></span>
                  <span className={`absolute block h-0.5 w-5 sm:w-6 bg-current transform transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`absolute block h-0.5 w-5 sm:w-6 bg-current transform transition-all duration-300 ease-out ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}></span>
                </div>
              </div>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className={`absolute top-full left-0 right-0 transition-all duration-500 ease-out opacity-100 translate-y-0 pointer-events-auto ${
            isScrolled 
              ? 'mx-4 rounded-2xl border border-[#333] shadow-lg'
              : 'mx-0 rounded-none border-none shadow-none'
          } bg-black/95 backdrop-blur-sm z-[99999]`}>
          <nav className="flex flex-col py-6">
            {navLinksData.map((link, index) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="px-5 py-4 text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 text-lg transform hover:translate-x-2"
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={(e) => {
                  e.preventDefault();
                  setTimeout(() => {
                    const target = document.querySelector(link.href);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    } else {
                      const fallbackTarget = document.getElementById(link.href.replace('#', ''));
                      if (fallbackTarget) {
                        fallbackTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }
                  }, 100);
                  setIsOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col px-5 py-4 space-y-3 border-t border-white/10">
            {signInButtonElement}
            {ctaButtonElement}
          </div>
        </div>
        )}
      </header>
    </>
  );
}
