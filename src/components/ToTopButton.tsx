"use client";

import { useState, useEffect } from "react";
import Icons from "@/components/Icons";

export default function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={goToTop}
      className={`${
        showTopBtn ? "visible opacity-100" : "invisible opacity-0"
      } fixed bottom-4 right-4 z-10 rounded-md bg-surface-light transition-opacity duration-300 md:bottom-10 md:right-10`}
    >
      <Icons className="h-8 w-8 fill-accent md:h-10 md:w-10" icon="arrowUp" />
    </button>
  );
}
