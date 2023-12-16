"use client";
import { useStore } from "@/state/store";

export default function Overlay() {
  const isMenuOpen = useStore((state) => state.isMenuOpen);

  return (
    <div
      className={`${
        isMenuOpen ? "visible" : "invisible"
      } fixed inset-0 z-10 bg-surface opacity-90 backdrop-blur-sm`}
    />
  );
}
