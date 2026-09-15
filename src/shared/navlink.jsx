import React from "react";

function NavLink({ name, href, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative text-[15px] font-medium text-(--text)
        transition-colors duration-300 ease-out
        hover:text-(--text-h)"
    >
      {name}
      <span
        className="absolute -bottom-1 left-1/2 h-[1.5px] w-0 bg-(--accent)
          -translate-x-1/2 transition-all duration-300 ease-out
          group-hover:w-full"
      />
    </a>
  );
}

export default NavLink;
