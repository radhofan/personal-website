"use client";
import React from "react";

export default function Title() {
  return (
    <section className="relative w-full text-center font-space-grotesk mb-8">
      <h1 className="leading-none tracking-tight">
        <span className="block text-[clamp(1.5rem,8vw,4.5rem)] font-extrabold text-white uppercase">
          SOFTWARE
        </span>
        <span className="block text-[clamp(1.5rem,8vw,4.5rem)] font-extrabold text-white/20 uppercase">
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
