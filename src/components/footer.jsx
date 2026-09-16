import React from "react";

import Logo from "../shared/logo";
import Social from "../shared/socialicons";
import NavLink from "../shared/navlink";

const NAV_LINKS = [
  { name: "Shop", href: "#shop" },
  { name: "Our Story", href: "#our-story" },
  { name: "Contact", href: "#contact" },
];

const CONTACT_INFO = [
  { label: "Email", value: "hello@ruhearbs.com", href: "#" },
  { label: "Phone", value: "+92 326 7544688", href: "tel:+923267544688" },
];

function Footer() {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    const navHeight = 80; // keep in sync with Navbar's offset
    const targetY =
      target.getBoundingClientRect().top + window.scrollY - navHeight;

    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-(--border) px-4 sm:px-6 pt-14 sm:pt-16 pb-8">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] gap-10 sm:gap-12 text-left">
          {/* Brand + social */}
          <div className="flex flex-col items-start gap-5">
            <Logo />
            <p className="max-w-xs text-[14px] sm:text-[15px] leading-[165%] text-(--text)">
              Handmade, small-batch soap — cold-pressed oils, herbs, and
              clays, no sulfates, no shortcuts.
            </p>
            <Social />
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="m-0! text-[13px] font-semibold uppercase tracking-[1.5px] text-(--text-h)">
              Quick Links
            </h4>
            <ul className="flex flex-col items-start gap-3">
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
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="m-0! text-[13px] font-semibold uppercase tracking-[1.5px] text-(--text-h)">
              Get in Touch
            </h4>
            <ul className="flex flex-col items-start gap-3">
              {CONTACT_INFO.map(({ label, value, href }) => (
                <li key={label} className="flex flex-col items-start gap-0.5">
                  <span className="text-[12px] uppercase tracking-[1px] text-(--text)">
                    {label}
                  </span>
                  <a
                    href={href}
                    className="text-[15px] font-medium text-(--text-h)
                      transition-colors duration-300 ease-out
                      hover:text-(--accent)"
                  >
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between
            gap-4 border-t border-(--border) pt-6 text-[13px] text-(--text)"
        >
          <span>&copy; {new Date().getFullYear()} RU Hearbs. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Made with <span className="text-(--accent)">&hearts;</span> by hand
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;