import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const Navbar = () => {
  const headersList = headers();
  const domain = headersList.get("host") || "";
  const fullUrl = headersList.get("referer") || "";
  const [, pathname] =
    fullUrl.match(new RegExp(`https?:\/\/${domain}(.*)`)) || [];

  return (
    <nav className="fixed top-0 flex-center border-b-2 border-black-200 py-7 text-white w-full bg-black-100 z-[100]">
      <div className="w-full max-w-screen-2xl px-5 xs:px-8 sm:px-16 flex-between mx-auto">
        <Link href="/">
          <Image src="/jsm-logo.svg" alt="logo" width={55} height={40} />
        </Link>
        <Image
          src="/hamburger-menu.svg"
          width={30}
          height={30}
          alt="menu"
          className="block md:hidden"
        />
        <ul className="flex-center gap-x-3 max-md:hidden md:gap-xs-10">
          <li
            className={twMerge(
              pathname === "/" ? "text-gradient_blue-purple" : ""
            )}
          >
            <Link href="/home">Home</Link>
          </li>
          <li
            className={twMerge(
              pathname === "/home" ? "text-gradient_blue-purple" : ""
            )}
          >
            <Link href="/about">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
