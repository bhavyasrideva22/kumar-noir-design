
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-white py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="font-playfair text-xl sm:text-2xl font-medium tracking-tight">
          KK
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm uppercase tracking-wide link-hover">
            Home
          </Link>
          <Link to="/about" className="text-sm uppercase tracking-wide link-hover">
            About
          </Link>
          <Link to="/services" className="text-sm uppercase tracking-wide link-hover">
            Services
          </Link>
          <Link to="/insights" className="text-sm uppercase tracking-wide link-hover">
            Insights
          </Link>
          <Link to="/contact" className="text-sm uppercase tracking-wide link-hover">
            Contact
          </Link>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden flex flex-col gap-1.5" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={cn(
            "w-6 h-px bg-black transition-all duration-300",
            isOpen && "rotate-45 translate-y-1.5"
          )}></span>
          <span className={cn(
            "w-6 h-px bg-black transition-all duration-300",
            isOpen && "opacity-0"
          )}></span>
          <span className={cn(
            "w-6 h-px bg-black transition-all duration-300",
            isOpen && "-rotate-45 -translate-y-1.5"
          )}></span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white pt-20 z-40 transition-all duration-300 md:hidden",
        isOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <nav className="flex flex-col items-center gap-8 p-8">
          <Link 
            to="/" 
            className="text-xl uppercase tracking-wide" 
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-xl uppercase tracking-wide" 
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className="text-xl uppercase tracking-wide" 
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/insights" 
            className="text-xl uppercase tracking-wide" 
            onClick={() => setIsOpen(false)}
          >
            Insights
          </Link>
          <Link 
            to="/contact" 
            className="text-xl uppercase tracking-wide" 
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
