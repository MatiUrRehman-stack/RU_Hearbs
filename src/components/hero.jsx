import React from "react";

import whandsoap from "../assets/images/handsoap.png";
import ghandSoap from "../assets/images/hand-soap.png";
function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-5 lg:pt-10 pb-0">
      {/* Soft decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-(--sage-bg) blur-3xl opacity-60" />
      <div className="pointer-events-none absolute -top-10 -right-16 h-72 w-72 rounded-full bg-(--accent-bg) blur-3xl opacity-50" />

      {/* Text content */}
      <div className="relative z-30 flex flex-col items-center gap-6 max-w-2xl mx-auto text-center">
        <span className="inline-flex items-center rounded-full border border-(--accent-border) bg-(--accent-bg) px-2 py-1.5 text-[13px] font-medium uppercase tracking-[1.5px] text-(--accent)">
          Handmade &middot; Natural &middot; Small-batch
        </span>

        <h1 className="m-0 text-[40px] leading-[110%] lg:text-[56px]">
          Soap, made by hand,
          <br />
          made for your skin.
        </h1>

        <p className="max-w-md text-[17px] leading-[160%] text-(--text)">
          Every bar of RU Hearbs is cold-pressed with natural oils and
          herbs, no fillers, no shortcuts. Just clean, gentle skincare
          crafted in small batches.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#shop"
            className="rounded-full bg-(--accent) px-7 py-3 text-[15px] font-medium text-white
              transition-all duration-300 ease-out
              hover:shadow-(--shadow) hover:-translate-y-0.5"
          >
            Shop Now
          </a>
          <a
            href="#our-story"
            className="rounded-full border border-(--border) px-7 py-3 text-[15px] font-medium text-(--text-h)
              transition-all duration-300 ease-out
              hover:border-(--accent-border) hover:text-(--accent)"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Image composition — pulled up to overlap text */}
        <div className="relative z-10 -mt-16 lg:-mt-30 flex items-end justify-center h-75 lg:h-105">
        {/* Colored hue glow behind the hand shot */}
        <div className="pointer-events-none absolute bottom-0 h-70 w-70 lg:h-95 lg:w-95 rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--sage) 0%, var(--accent-bg) 55%, transparent 75%)",
          }}
        />

        {/* Flanking soap bars, tucked behind and beside the hand */}
        {/* Hand — the centerpiece, anchored to the bottom edge */}
        <img
          src={whandsoap}
          alt="RU Hearbs soap held in hands"
          className="relative z-20 w-[clamp(140px,30vw,320px)]1 lg:w-130 object-contain object-bottom drop-shadow-xl
            translate-y-6 lg:translate-y-8
            animate-[float_6s_ease-in-out_infinite]"
        />
        
        {/* Hand — the centerpiece, anchored to the bottom edge */}
        <img
          src={ghandSoap}
          alt="RU Hearbs soap held in hands"
          className="relative z-20 w-[clamp(140px,30vw,320px)] lg:w-110 object-contain object-bottom drop-shadow-xl
            translate-y-6 lg:translate-y-8
            animate-[float_6s_ease-in-out_infinite]"
        />
      </div>
    </section>
  );
}

export default Hero;