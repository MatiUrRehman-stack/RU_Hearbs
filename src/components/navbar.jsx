import React, { useState } from "react";

import Logo from "../shared/logo";
import Social from "../shared/socialicons";
import NavLink from "../shared/navlink";

const NAV_LINKS = [
  { name: "Shop", href: "#shop" },
  { name: "Our Story", href: "#our-story" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    const navHeight = 80; // adjust to match your navbar's actual height
    const targetY =
      target.getBoundingClientRect().top + window.scrollY - navHeight;

    window.scrollTo({ top: targetY, behavior: "smooth" });
    setOpen(false); // closes mobile menu if open
  };

  return (
    <nav className="relative border-b border-(--border) px-6 py-5">
      <div className="flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]">
        {/* Logo — always visible */}
        <div className="flex justify-start">
          <Logo />
        </div>

        {/* Center links — desktop (lg) only */}
        <ul className="hidden lg:flex items-center justify-center gap-8">
          {NAV_LINKS.map(({ name, href }) => (
            <li key={name}>
              <NavLink
                name={name}
                href={href}
                onClick={(e) => scrollToSection(e, href)}
              />
            </li>
          ))}
        </ul>

        {/* Right side — Social from tablet up, hamburger below tablet */}
        <div className="flex items-center justify-end gap-4">
          <div className="hidden md:block">
            <Social />
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden flex flex-col justify-center gap-1.25 h-9 w-9"
          >
            <span
              className={`h-[1.5px] w-6 bg-(--text-h) transition-all duration-300 ease-out ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-6 bg-(--text-h) transition-all duration-300 ease-out ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[1.5px] w-6 bg-(--text-h) transition-all duration-300 ease-out ${
                open ? "translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown — below tablet only */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-80 opacity-100 mt-5" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 pb-5">
          {NAV_LINKS.map(({ name, href }) => (
            <li key={name}>
              <NavLink
                name={name}
                href={href}
                onClick={(e) => scrollToSection(e, href)}
              />
            </li>
          ))}
        </ul>
        <div className="flex justify-center pb-2">
          <Social />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;