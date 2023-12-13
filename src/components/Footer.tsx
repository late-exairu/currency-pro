import Link from "next/link";
import { DM_Sans } from "next/font/google";
import data from "@/data/data.json";
import Logo from "@/components/Logo";
import Socials from "@/components/Socials";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function Footer() {
  const footerMenuData = data.footerMenu;
  const footerSocials = data.footerSocials;
  const footerInfo = data.footerInfo;

  return (
    <footer
      className={`${dmSans.className} mt-10 flex flex-col gap-8 bg-surface-light pt-20 md:mt-14 md:gap-5 lg:gap-10 lg:pt-28 xl:gap-14 xl:pt-[120px]`}
    >
      <div className="container sm:px-[50px] md:px-[60px] lg:px-[70px] xl:max-w-[1200px]">
        <div className="grid grid-cols-1 items-start gap-5 gap-y-8 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          <Link
            className="md:col-span-auto col-span-1 mx-auto flex auto-cols-fr justify-self-start xs:col-span-2 sm:col-span-1 sm:mx-0"
            href="/"
          >
            <Logo className="h-10 w-full max-w-[176px]" />
          </Link>

          {footerMenuData.map((menu) => (
            <ul className="flex flex-1 flex-col gap-2 md:gap-4">
              {menu.map((item, index) => (
                <li key={item.id} className="text-center xs:text-left">
                  <a
                    className={`${
                      index === 0
                        ? "text-lg text-text-heavy"
                        : "text-md text-text"
                    } font-medium transition-colors hover:text-accent`}
                    href={item.url}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="container flex sm:px-[50px] md:px-[60px] lg:px-[70px] xl:max-w-[1200px]">
        <div className="flex flex-grow flex-col-reverse items-center justify-between gap-7 py-5 md:py-8 lg:my-auto lg:flex-row lg:py-10">
          <div className="flex flex-col gap-x-8 gap-y-2 text-center lg:flex-row">
            {footerInfo.map((info, index) => (
              <p key={index} className="text-text">
                {info.url ? (
                  <Link
                    className="text-text transition-colors hover:text-accent"
                    href={info.url}
                  >
                    {info.title}
                  </Link>
                ) : (
                  info.title
                )}
              </p>
            ))}
          </div>

          <Socials className="mx-auto lg:mr-0" list={footerSocials} />
        </div>
      </div>
    </footer>
  );
}
