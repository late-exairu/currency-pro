"use client";
import { useStore } from "@/state/store";

interface MenuButtonProps {
  className?: string;
}

export default function MenuButton({ className = "" }: MenuButtonProps = {}) {
  const isMenuOpen = useStore((state) => state.isMenuOpen);
  const toggleMenuOpen = useStore((state) => state.toggleMenuOpen);

  const spanStyles =
    "h-0.5 w-6 my-[2px] transition ease transform duration-200 bg-accent-heavy";

  return (
    <button
      onClick={() => toggleMenuOpen(isMenuOpen)}
      className={`${className} ${
        isMenuOpen && "open"
      } group absolute z-40 flex h-10 w-10 shrink-0 flex-col items-center justify-center lg:hidden`}
    >
      <span
        className={`${spanStyles} group-[.open]:translate-y-[6px] group-[.open]:rotate-45`}
      />
      <span className={`${spanStyles} group-[.open]:opacity-0`} />
      <span
        className={`${spanStyles} group-[.open]:-translate-y-[6px] group-[.open]:-rotate-45`}
      />
    </button>
  );
}
