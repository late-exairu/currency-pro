"use client";
import { useStore } from "@/state/store";
import Icons from "@/components/Icons";
import Button from "@/components/Button";

export default function DarkModeSwitch() {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);

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
