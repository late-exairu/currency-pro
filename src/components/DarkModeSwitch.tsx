"use client";
import { usePersonStore } from "@/state/store";
import Icons from "@/components/Icons";
import Button from "@/components/Button";

export default function DarkModeSwitch() {
  const isDarkMode = usePersonStore((state) => state.isDarkMode);
  const toggleDarkMode = usePersonStore((state) => state.toggleDarkMode);

  return (
    <button
      className={`${
        isDarkMode && "dark"
      } group my-auto h-10 w-10 overflow-hidden`}
      onClick={() => toggleDarkMode(isDarkMode)}
    >
      <div className="flex -translate-y-10 flex-col transition-transform duration-300 group-[.dark]:translate-y-0">
        <div className="flex h-10 w-10 items-center justify-center">
          <Icons
            className="fill-accent-light group-hover:fill-accent h-6 w-6 transition-colors"
            icon="moon"
          />
        </div>
        <div className="flex h-10 w-10 items-center justify-center">
          <Icons
            className="fill-accent-light group-hover:fill-accent h-6 w-6 transition-colors"
            icon="sun"
          />
        </div>
      </div>
    </button>
  );
}
