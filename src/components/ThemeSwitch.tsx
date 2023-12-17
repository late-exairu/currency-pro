"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Icons from "@/components/Icons";

export default function ThemeSwitch(props: { className?: string }) {
  const { className } = props;
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const isActive = theme === "light";

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`${className ?? ""} ${
        !isActive ? "dark" : ""
      } group my-auto h-10 w-10 overflow-hidden`}
      onClick={() => toggleTheme()}
    >
      <div className="flex -translate-y-10 flex-col transition-transform duration-300 group-[.dark]:translate-y-0">
        <div className="flex h-10 w-10 items-center justify-center">
          <Icons
            className="h-6 w-6 fill-accent-light transition-colors group-hover:fill-accent"
            icon="moon"
          />
        </div>
        <div className="flex h-10 w-10 items-center justify-center">
          <Icons
            className="h-6 w-6 fill-accent-light transition-colors group-hover:fill-accent"
            icon="sun"
          />
        </div>
      </div>
    </button>
  );
}
