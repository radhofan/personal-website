"use client";
import React from "react";

export default function Title() {
  return (
    <section className="relative w-full text-center font-space-grotesk">
      <h1 className="leading-none tracking-tight">
        <span className="block text-[clamp(3rem,10vw,8rem)] font-extrabold text-white">
          SOFTWARE
        </span>
        <span className="block text-[clamp(3rem,10vw,8rem)] font-extrabold text-white/20">
          ENGINEER
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base text-gray-400">
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </p>
    </section>
  );
}
