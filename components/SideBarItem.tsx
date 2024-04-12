"use client";
import React, { forwardRef } from "react";

interface SideBarItemProps {
  title: string;
  icon: React.ComponentType<{ size: number; color: string; className: string }>;
  size: number;
}

export const SideBarItem = forwardRef<HTMLDivElement, SideBarItemProps>(
  ({ title, icon, size }, ref) => {
    const IconComponent = icon;

    return (
      <div
        ref={ref}
        tabIndex={0}
        className="mx-auto mt-5 flex h-[45px] w-[85%] items-center rounded-lg p-4 outline-none focus:bg-gray-800"
      >
        <IconComponent className="ml-3" size={size} color="white" />
        <span className="ml-4 text-white">{title}</span>
      </div>
    );
  },
);

SideBarItem.displayName = "SideBarItem";
