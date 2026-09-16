import React from "react";
import WhatsApp from "./whatsapp";

function Card({ image, heading, description, price, alt }) {
  return (
    <div
      className="group flex flex-col overflow-hidden rounded-2xl border border-(--border)
        bg-(--bg-soft) transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-(--shadow)"
    >
      {/* Image */}
      <div className="relative aspect-4/5 w-full overflow-hidden">
        <img
          src={image}
          alt={alt || heading}
          className="h-full w-full object-cover transition-transform duration-500 ease-out
            group-hover:scale-110"
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col items-start gap-2 p-5 text-left">
        <h3 className="m-0! text-[17px] sm:text-[18px] font-semibold text-(--text-h)">
          {heading}
        </h3>

        {description && (
          <p className="text-[14px] sm:text-[15px] leading-[160%] text-(--text)">
            {description}
          </p>
        )}<div className="flex w-full flex-row items-center justify-between">
          {price && (
            <span className="pt-1 text-[15px] font-medium text-(--accent)">
              <sup>RS </sup>
              {price}
            </span>
          )}
          <WhatsApp />
        </div>
      </div>
    </div>
  );
}

export default Card;