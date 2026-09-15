import React from "react";

import instagram from "../assets/instagram.png";
import whatsapp from "../assets/whatsapp.png";
import youtube from "../assets/youtube.png";
import facebook from "../assets/facebook.png";
import tiktok from "../assets/tiktok.png";

const whatsappMessage = encodeURIComponent(
  "Hi RU Hearbs! I'm interested in your soaps 🌿"
);

const links = [
    {
    name: "WhatsApp",
    href: `https://wa.me/923001234567?text=${whatsappMessage}`,
    icon: whatsapp,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@attarg-v4s?si=KmULc_bjZla87Aob&sub_confirmation=1",
    icon: youtube,
  },
  { name: "Facebook", href: "https://facebook.com", icon: facebook },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@mrs.ur8?_r=1&_t=ZN-99kIelMIsUA",
    icon: tiktok,
  },
  { name: "Instagram", href: "https://instagram.com", icon: instagram },
];
function Social() {
  return (
    <div id="social" className="flex items-center justify-center gap-3">
      {links.map(({ name, href, icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="group relative flex h-11 w-11 items-center justify-center
            rounded-full bg-(--social-bg) border border-(--border)
            transition-all duration-300 ease-out
            hover:bg-(--accent-bg) hover:border-(--accent-border)
            hover:-translate-y-1 hover:shadow-(--shadow)
            active:translate-y-0 active:scale-95"
        >
          <img
            src={icon}
            alt={name}
            className="button-icon h-5 w-5 object-contain
              transition-transform duration-300 ease-out
              group-hover:scale-110"
          />
        </a>
      ))}
    </div>
  );
}

export default Social;