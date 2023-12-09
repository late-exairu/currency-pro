import Link from "next/link";
import { DM_Sans } from "next/font/google";
import Logo from "./Logo";
import data from "@/data/data.json";
import MenuButton from "@/components/MenuButton";
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

export default function Header() {
  const menuData = data.mainMenu;

  return (
    <header className="border-surface-heavy fixed inset-x-0 top-0 h-[60px] border-b bg-white/80 py-2 backdrop-blur-sm dark:bg-slate-800/80 md:h-[72px] md:py-4 lg:h-[96px] lg:py-6">
      <div className="container relative flex justify-center md:justify-between">
        <Link className="flex items-center" href="/">
          <Logo className="h-10 w-[176px]" />
        </Link>

        <ul
          className={`${dmSans.className} hidden flex-row gap-2.5 text-lg font-medium lg:flex lg:gap-4 xl:gap-9`}
        >
          {menuData.map((item: menuItem) => (
            <li key={item.id}>
              <Link
                className="hover:text-accent flex h-12 items-center justify-center px-2.5 transition-colors"
                href={item.url}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <UserBar />

        <MenuButton className="absolute right-2 top-1/2 -translate-y-1/2" />
      </div>
    </header>
  );
}
