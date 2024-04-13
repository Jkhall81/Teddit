"use client";

import { cn } from "@/lib/utils";
import {
  IoChevronDown,
  IoChevronUp,
  IoGameControllerOutline,
} from "react-icons/io5";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
import { FaBitcoin } from "react-icons/fa";
import { PiTelevisionLight } from "react-icons/pi";
import { CiStar } from "react-icons/ci";

interface SideBarItemProps {
  title: string;
  family: string;
  size: number;
  iconStyles: string;
  toggleOpenStatus: () => void;
  isOpen: boolean;
}

export const DropDownSideBarItem = ({
  title,
  family,
  iconStyles,
  size,
  toggleOpenStatus,
  isOpen,
}: SideBarItemProps) => {
  const iconComponentMap: { [key: string]: any } = {
    IoGameControllerOutline: IoGameControllerOutline,
    MdOutlineSportsBaseball: MdOutlineSportsBaseball,
    FaChartLine: FaChartLine,
    FaBitcoin: FaBitcoin,
    PiTelevisionLight: PiTelevisionLight,
    CiStar: CiStar,
  };
  const IconComponent = iconComponentMap[family];

  return (
    <div
      onClick={toggleOpenStatus}
      className={cn(
        "mx-auto flex h-[45px] w-[85%] select-none items-center justify-between rounded-lg px-4 outline-none hover:cursor-pointer hover:bg-gray-700",
        iconStyles,
      )}
    >
      <div className="flex">
        <IconComponent className="ml-3" size={size} color="white" />
        <span className="ml-4 text-white">{title}</span>
      </div>
      <div className="">
        {isOpen ? (
          <IoChevronUp size={25} color="white" />
        ) : (
          <IoChevronDown size={25} color="white" />
        )}
      </div>
    </div>
  );
};
