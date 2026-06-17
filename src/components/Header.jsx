import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { MdEmail, MdLocationOn } from "react-icons/md"
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa"

const navMenu = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b-2 border-stone-800 ${
        scrolled
          ? "bg-gradient-to-r from-rose-200 to-red-200 shadow-lg"
          : "bg-red-200"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-8">

        <div className="flex-shrink-0">
          <Link
            to="/"
            className="text-2xl text-stone-800 hover:text-white transition-colors duration-300"
            style={{ fontFamily: "satoshi-black" }}
          >
            Wanianse
          </Link>
        </div>

        <nav
          className="hidden md:flex justify-end px-12 flex-1 space-x-9 text-stone-800 text-base"
          style={{ fontFamily: "satoshi-medium" }}
        >
          {navMenu.map((link) => (
            <Link
              to={link.href}
              key={link.href}
              className={`relative group transition-colors duration-300 ${
                currentPath === link.href ? "text-white" : "hover:text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute left-0 bottom-[-4px] h-[2px] bg-stone-800 transition-all duration-300 ${
                  currentPath === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            onClick={() => setSheetOpen(true)}
            className="bg-red-300 hover:bg-red-100 transition-all duration-300"
          >
            Contact Me
          </Button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-stone-800 hover:scale-110 transition-transform duration-200"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-rose-200 to-red-200 border-t border-stone-800 px-6 py-4 space-y-4">
          {navMenu.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`block rounded p-2 transition ${
                currentPath === link.href
                  ? "bg-stone-800 text-white"
                  : "text-stone-800 hover:bg-stone-800 hover:text-white"
              }`}
              style={{ fontFamily: "satoshi-medium" }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            onClick={() => {
              setSheetOpen(true);
              setIsOpen(false);
            }}
            className="w-full bg-red-300 hover:bg-red-100"
          >
            Contact Me
          </Button>
        </div>
      )}

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="right" className="bg-red-50">
          <SheetHeader>
            <SheetTitle className="text-2xl px-4 mt-10 text-stone-800" style={{ fontFamily: "satoshi-bold" }}>
              Get in Touch
            </SheetTitle>
          </SheetHeader>
          <div className="px-10 space-y-4" style={{ fontFamily: "satoshi-medium" }}>
            <div className="flex items-center gap-3">
              <MdEmail className="text-rose-500" size={20} />
              <span className="text-zinc-700">waniansheesh@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MdLocationOn className="text-rose-500" size={20} />
              <span className="text-zinc-700">Cikarang, Jawa Barat, Indonesia</span>
            </div>

            <div className="pt-4 mt-20 border-t border-rose-200">
              <h4 className="text-stone-800 mb-3" style={{ fontFamily: "satoshi-bold" }}>Social Media</h4>
              <div className="flex gap-4">
                
                  <a
                  href="https://github.com/wanianse-jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white shadow hover:bg-rose-100 transition-colors"
                >
                  <FaGithub className="text-rose-500" size={20} />
                </a>
                
                  <a
                  href="https://www.instagram.com/waniansheesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white shadow hover:bg-rose-100 transition-colors"
                >
                  <FaInstagram className="text-rose-500" size={20} />
                </a>
                
                  <a
                  href="https://youtube.com/@waniansealimamah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white shadow hover:bg-rose-100 transition-colors"
                >
                  <FaYoutube className="text-rose-500" size={20} />
                </a>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header