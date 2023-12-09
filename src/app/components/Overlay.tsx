"use client";
import { usePersonStore } from "@/state/store";

export default function Overlay() {
  const isMenuOpen = usePersonStore((state) => state.isMenuOpen);

  return (
    <div
      className={`${
        isMenuOpen ? "visible" : "invisible"
      } bg-surface fixed inset-0 opacity-90 backdrop-blur-sm`}
    />
  );
}
