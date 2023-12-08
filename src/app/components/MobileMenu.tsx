"use client";

import MenuButton from "@/components/MenuButton";
import Link from "next/link";
import { DM_Sans } from "next/font/google";
import { usePersonStore } from "../state/store";
import data from "@/data/data.json";
import UserBar from "./UserBar";

interface menuItem {
  id: number;
  title: string;
  url: string;
}

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function MobileMenu() {
  const menuData = data.mainMenu;
  const isMenuOpen = usePersonStore((state) => state.isMenuOpen);

  return (
    <div
      className={`${
        isMenuOpen ? "translate-x-0 lg:translate-x-full" : "translate-x-full"
      } fixed inset-y-0 right-0 w-screen bg-slate-100 p-10 transition-transform duration-300 md:w-[400px]`}
    >
      <ul
        className={`${dmSans.className} flex-column gap-2.5 text-lg font-medium md:gap-5 lg:flex lg:gap-9`}
      >
        {menuData.map((item: menuItem) => (
          <li key={item.id}>
            <Link
              className="flex h-12 items-center justify-center px-2.5 hover:text-blue-500"
              href={item.url}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <UserBar />

      <MenuButton className="absolute right-2 top-2 md:top-4" />
    </div>
  );
}
