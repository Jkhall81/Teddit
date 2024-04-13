"use client";
import { cn } from "@/lib/utils";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";

interface DropDownTopicProps {
  title: string;
  toggleTopicOpenStatus: () => void;
  isTopicOpen: boolean;
}

export const DropDownTopic = ({
  title,
  toggleTopicOpenStatus,
  isTopicOpen,
}: DropDownTopicProps) => {
  return (
    <div
      onClick={toggleTopicOpenStatus}
      className={cn(
        "mx-auto mt-5 flex h-[45px] w-[85%] select-none items-center justify-between rounded-lg p-4 outline-none hover:cursor-pointer hover:bg-gray-700",
      )}
    >
      <span className="text-gray-500">{title}</span>
      {isTopicOpen ? (
        <IoChevronUp size={25} color="white" />
      ) : (
        <IoChevronDown size={25} color="white" />
      )}
    </div>
  );
};
