import React from "react";

import whatsapp from "../assets/whatsapp.png";

function WhatsApp({ heading, description, price }) {
  const message = encodeURIComponent(
    `Hi RU Hearbs! I'm interested in "${heading}"${
      description ? ` — ${description}` : ""
    }${price ? ` (Rs ${price})` : ""}. Is it available?`
  );

  const href = `https://wa.me/923267544688?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Order ${heading} on WhatsApp`}
      className="group relative flex h-9 w-9 items-center justify-center
        rounded-full bg-(--social-bg) border border-(--border)
        transition-all duration-300 ease-out
        hover:bg-white hover:border-(--accent)
        hover:-translate-y-1 hover:shadow-(--shadow)
        active:translate-y-0 active:scale-95"
    >
      <img
        src={whatsapp}
        alt="WhatsApp"
        className="button-icon h-4 w-4 object-contain
          transition-transform duration-300 ease-out
          group-hover:scale-110"
      />
    </a>
  );
}

export default WhatsApp;