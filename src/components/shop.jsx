import React from "react";

import Card from "../shared/card";

import greenSoap from "../assets/products/aceneg.jpg";
import whiteSoap from "../assets/products/whiteningw.jpg";

const PRODUCTS = [
  {
    id: "acne-green",
    image: greenSoap,
    heading: "Acne Herbal Soap",
    description: "Cold-pressed with neem and tea tree to calm and clarify.",
    price: "500",
  },
  {
    id: "whitening-white-1",
    image: whiteSoap,
    heading: "Whitening Bar",
    description: "Gentle clay and citrus blend for brighter, even-toned skin.",
    price: "500",
  },
  {
    id: "whitening-white-2",
    image: whiteSoap,
    heading: "Whitening Bar",
    description: "Gentle clay and citrus blend for brighter, even-toned skin.",
    price: "500",
  },
  {
    id: "whitening-white-3",
    image: whiteSoap,
    heading: "Whitening Bar",
    description: "Gentle clay and citrus blend for brighter, even-toned skin.",
    price: "500",
  },
];

function Shop() {
  return (
    <section
      id="shop"
      className="px-4 sm:px-6 md:px-8 lg:px-6 xl:px-8 py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28"
    >
      <div className="max-w-6xl xl:max-w-7xl mx-auto">
        {/* Section intro */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 text-center max-w-[90%] sm:max-w-xl md:max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <span className="inline-flex items-center rounded-full border border-(--accent-border) bg-(--accent-bg) px-3 sm:px-4 py-1.5 text-[12px] sm:text-[13px] font-medium uppercase tracking-[1.5px] text-(--accent)">
            Shop
          </span>
          <h2 className="m-0! text-[clamp(22px,5vw,40px)] font-semibold uppercase leading-[120%] tracking-[0.5px] text-(--text-h)">
            Bars made in small batches
          </h2>
          <p className="max-w-[90%] sm:max-w-md text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[165%] text-(--text)">
            Every soap is hand-poured, hand-cut, and cured slow —
            no fillers, no shortcuts.
          </p>
        </div>

        {/* Product grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2
            lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 md:gap-7 lg:gap-8"
        >
          {PRODUCTS.map(({ id, image, heading, description, price }) => (
            <Card
              key={id}
              image={image}
              heading={heading}
              description={description}
              price={price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;