import React from "react";

import whatsapp from "../assets/whatsapp.png";

const whatsappMessage = encodeURIComponent(
  "Hi RU Hearbs! I'm interested in your soaps 🌿"
);

const links = [
    {
    name: "WhatsApp",
    href: `https://wa.me/923267544688?text=${whatsappMessage}`,
    icon: whatsapp,
  },
];
function WhatsApp() {
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
            hover:bg-white hover:border-(--greeen)
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

export default WhatsApp;