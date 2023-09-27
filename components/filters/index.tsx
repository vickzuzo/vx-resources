"use client";
import { formUrlQuery } from "@/utils";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const links = ["all", "frontend", "backend", "git", "full stack"];

export const Filters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  const [active, setActive] = useState(category);

  const handleFilter = (link: string) => {
    let newUrl = "";
    setActive(link);
    newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "category",
      value: link.toLocaleLowerCase(),
    });
    router.push(newUrl, { scroll: false });
  };

  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full mx-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
      {links.map((link) => (
        <button
          key={link}
          className={twMerge(
            "whitespace-nowrap rounded-lg px-8 py-2.5 capitalize",
            active === link ? "gradient_blue-purple" : ""
          )}
          onClick={() => handleFilter(link)}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};
