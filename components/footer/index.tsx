import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="text-white-800 flex-between w-full gap-y-10 border-black-400 border-t bg-black-100 px-20 py-10 max-md:flex-col">
      <p className="text-center">
        Copyright &copy; {new Date().getFullYear()} vx-dev | All Rights Reserved
      </p>
      <div className="flex gap-x-9">
        <Link href="/terms-of-use">Terms & Conditions</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
    </footer>
  );
};
