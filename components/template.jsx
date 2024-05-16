// template.js

"use client";

import { useEffect } from "react";
import { animatePageIn } from "@utils/animation";

export default function Template({ children }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <>
      <div
        id="banner-1"
        style={{ width: "12.5%", left: "0%" }}
        className="min-h-screen bg-neutral-950 z-[9999] fixed top-0"
      />
      <div
        id="banner-2"
        style={{ width: "12.5%", left: "12.5%" }}
        className="min-h-screen bg-neutral-950 z-[9999] fixed top-0"
      />
      <div
        id="banner-3"
        style={{ width: "12.5%", left: "25%" }}
        className="min-h-screen bg-neutral-950 z-[9999] fixed top-0"
      />
      <div
        id="banner-4"
        style={{ width: "12.5%", left: "37.5%" }}
        className="min-h-screen bg-neutral-950 z-[9999] fixed top-0"
      />
      <div
        id="banner-5"
        style={{ width: "12.5%", left: "50%" }}
        className="min-h-screen bg-neutral-950 z-[9999] fixed top-0"
      />
      <div
        id="banner-6"
        style={{ width: "12.5%", left: "62.5%" }}
        className="min-h-screen bg-neutral-950 z-[9999] fixed top-0"
      />
      <div
        id="banner-7"
        style={{ width: "12.5%", left: "75%" }}
        className="min-h-screen bg-neutral-950 z-[9999] fixed top-0"
      />
      <div
        id="banner-8"
        style={{ width: "12.5%", left: "87.5%" }}
        className="min-h-screen bg-neutral-950 z-[9999] fixed top-0"
      />
      {children}
    </>
  );
}