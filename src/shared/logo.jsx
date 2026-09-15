import React from "react";

function Logo() {
  return (
    <div className="group inline-flex flex-col items-center leading-none select-none cursor-pointer">
      <span
        className="text-[42px] font-semibold text-(--text-h)
        tracking-[2px] transition-[letter-spacing] duration-500
        ease-out group-hover:tracking-[10px]"
      >
      RU
      </span>

      <span
        className="mt-1 text-[13px] font-medium uppercase
        tracking-[4px] text-(--accent)"
      >
        Hearbs
      </span>
    </div>
  );
}

export default Logo;