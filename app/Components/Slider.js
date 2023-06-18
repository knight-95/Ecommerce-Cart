"use client";
import Link from "next/link";
import React from "react";

export default function Slider() {
  return (
    <div className="relative">
      <img src="https://www.apple.com/v/macbook-pro-13/p/images/overview/hero_endframe__bsza6x4fldiq_large_2x.jpg"></img>
      <span className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <h1 class=" text-center hero-eyebrow typography-hero-callout text-white text-4xl">
          MacBook Pro
        </h1>
        <h2 class="text-7xl p-4 font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
          Pro anywhere
        </h2>
      </span>
    </div>
  );
}
