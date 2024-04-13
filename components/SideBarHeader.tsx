"use client";

import { usePathname } from "next/navigation";
import { SideBarItem } from "./SideBarItem";
import { GoHomeFill } from "react-icons/go";
import { BsArrowUpRightCircle } from "react-icons/bs";

export const SideBarHeader = () => {
  const pathname = usePathname();
  return (
    <nav className="mt-5 flex w-full flex-col">
      <SideBarItem
        iconStyles={pathname === "/home" ? "bg-gray-800" : ""}
        title="Home"
        icon={GoHomeFill}
        size={25}
        href="/home"
      />
      <SideBarItem
        iconStyles={pathname === "/popular" ? "bg-gray-800" : ""}
        title="Popular"
        icon={BsArrowUpRightCircle}
        size={25}
        href="/popular"
      />
    </nav>
  );
};
