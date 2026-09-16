import React from "react";

import founderPortrait from "../assets/story/founder.jpg";
import workshopPhoto from "../assets/story/workshop.jpg";
import ingredientsPhoto from "../assets/story/ingredients.jpg";

const MILESTONES = [
  {
    year: "2018",
    title: "A kitchen experiment",
    text: "It started with one batch of cold-pressed soap, made on a Sunday, for family and friends who kept asking for more.",
  },
  {
    year: "2020",
    title: "First small-batch workshop",
    text: "We moved out of the kitchen and into a proper workshop — still small, still handmade, still no shortcuts.",
  },
  {
    year: "2024",
    title: "RU Hearbs today",
    text: "Every bar is still poured, cut, and cured by hand — just with a few more hands helping now.",
  },
];

function OurStory() {
  return (
    <section
      id="our-story"
      className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32"
    >
      {/* Soft decorative blobs, consistent with Hero */}
      <div className="pointer-events-none absolute top-0 -right-24 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-(--sage-bg) blur-3xl opacity-50" />
      <div className="pointer-events-none absolute bottom-0 -left-20 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-(--accent-bg) blur-3xl opacity-40" />

      <div className="relative z-10 max-w-6xl xl:max-w-7xl mx-auto">
        {/* Section intro */}
        <div className="flex flex-col items-center gap-4 text-center max-w-[90%] sm:max-w-xl md:max-w-2xl mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <span className="inline-flex items-center rounded-full border border-(--accent-border) bg-(--accent-bg) px-3 sm:px-4 py-1.5 text-[11px] sm:text-[13px] font-medium uppercase tracking-[1.5px] text-(--accent)">
            Our Story
          </span>
          <h2 className="m-0! text-[clamp(26px,4vw,40px)] font-semibold uppercase leading-[120%] tracking-[0.5px] text-(--text-h)">
            From one kitchen batch
            <br className="hidden sm:block" /> to a small-batch craft.
          </h2>
          <p className="max-w-[90%] sm:max-w-md md:max-w-lg text-[14px] sm:text-[16px] md:text-[17px] leading-[165%] text-(--text)">
            RU Hearbs was never meant to be big — just honest. Here's how
            a Sunday experiment became bars people ask for by name.
          </p>
        </div>

        {/* Photo + narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20 mb-14 sm:mb-20 md:mb-24">
          {/* Photo composition */}
          <div className="relative mx-auto w-full max-w-65 sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md pb-8 pl-8 sm:pb-10 sm:pl-10 md:pb-11 md:pl-11 lg:pb-12 lg:pl-12">
            <div
              className="group relative aspect-4/5 w-full overflow-hidden rounded-[20px] sm:rounded-3xl md:rounded-[28px] shadow-(--shadow)
                rotate-[-4deg] transition-transform duration-500 ease-out
                hover:rotate-0 hover:scale-[1.03] hover:animate-[float_1.2s_ease-in-out_infinite]"
            >
              <img
                src={workshopPhoto}
                alt="RU Hearbs workshop where soap is hand poured"
                className="h-full w-full object-cover transition-transform duration-500 ease-out
                  group-hover:scale-110"
              />
            </div>

            <div
              className="group absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 md:-bottom-4 md:-right-4
                h-[42%] w-[50%] sm:h-[45%] sm:w-[52%] overflow-hidden
                rounded-xl sm:rounded-2xl border-3 sm:border-4 border-(--bg) shadow-(--shadow)
                rotate-[5deg] transition-transform duration-500 ease-out
                hover:rotate-0 hover:scale-105 hover:z-20 hover:animate-[float_1s_ease-in-out_infinite]"
            >
              <img
                src={founderPortrait}
                alt="RU Hearbs founder at work"
                className="h-full w-full object-cover transition-transform duration-500 ease-out
                  group-hover:scale-110"
              />
            </div>
          </div>

          {/* Narrative text */}
          <div className="flex flex-col items-center lg:items-start gap-5 sm:gap-6 text-center lg:text-left">
            <h3 className="m-0! text-[clamp(22px,3vw,28px)] font-semibold text-(--text-h)">
              Why we make it by hand
            </h3>
            <p className="max-w-[90%] sm:max-w-md text-[14px] sm:text-[16px] lg:text-[17px] leading-[165%] text-(--text)">
              Machines can move faster, but hand-poured soap cures slower
              and holds up better — that trade-off is the whole point.
              We source cold-pressed oils, herbs, and clays we can trace
              back to the farm, and every bar still gets cut by hand.
            </p>
            <p className="max-w-[90%] sm:max-w-md text-[14px] sm:text-[16px] lg:text-[17px] leading-[165%] text-(--text)">
              No sulfates, no synthetic fragrance, no shortcuts —
              just soap the way it was meant to be made.
            </p>
          </div>
        </div>

        {/* Milestone timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-7 lg:gap-6 mb-14 sm:mb-20 md:mb-24">
          {MILESTONES.map(({ year, title, text }) => (
            <div
              key={year}
              className="flex flex-col items-start gap-2 text-left rounded-2xl border border-(--border)
                bg-(--bg-soft) p-5 sm:p-6 md:p-7 transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-(--shadow)"
            >
              <span className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[1.5px] text-(--accent)">
                {year}
              </span>
              <h4 className="m-0! text-[17px] sm:text-[18px] font-semibold text-(--text-h)">
                {title}
              </h4>
              <p className="text-[13px] sm:text-[14px] md:text-[15px] leading-[160%] text-(--text)">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Ingredients strip + CTA */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-12 rounded-3xl sm:rounded-[28px] border border-(--border) bg-(--bg-soft) p-6 sm:p-8 md:p-10">
          <div className="w-full max-w-55 sm:max-w-sm md:max-w-55 lg:max-w-xs shrink-0 overflow-hidden rounded-2xl shadow-(--shadow) rotate-2 transition-transform duration-500 ease-out hover:rotate-0">
            <img
              src={ingredientsPhoto}
              alt="Natural ingredients used in RU Hearbs soap"
              className="h-full w-full object-cover aspect-4/3"
            />
          </div>

          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <h3 className="m-0! text-[clamp(20px,3vw,26px)] font-semibold text-(--text-h)">
              Ingredients you can actually pronounce
            </h3>
            <p className="max-w-[90%] sm:max-w-md lg:max-w-lg text-[14px] sm:text-[16px] leading-[165%] text-(--text)">
              Every ingredient list is short on purpose — cold-pressed
              oils, herbs, and clays, nothing else. If we can't trace it
              back to a source we trust, it doesn't go in the bar.
            </p>
            <a
              href="#shop"
              className="rounded-full bg-(--accent) px-6 sm:px-7 py-2.5 sm:py-3 text-[14px] sm:text-[15px] font-medium text-white
                transition-all duration-300 ease-out
                hover:shadow-(--shadow) hover:-translate-y-0.5"
            >
              Shop the Bars
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;