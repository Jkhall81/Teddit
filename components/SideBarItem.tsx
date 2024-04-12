import { cn } from "@/lib/utils";
import Link from "next/link";

interface SideBarItemProps {
  title: string;
  icon: React.ComponentType<{ size: number; color: string; className: string }>;
  size: number;
  iconStyles: string;
  href: string;
}

export const SideBarItem = ({
  title,
  icon,
  size,
  iconStyles,
  href,
}: SideBarItemProps) => {
  const IconComponent = icon;

  return (
    <Link href={href}>
      <div
        tabIndex={0}
        className={cn(
          "mx-auto flex h-[45px] w-[85%] items-center rounded-lg p-4 outline-none hover:bg-gray-700",
          iconStyles,
        )}
      >
        <IconComponent className="ml-3" size={size} color="white" />
        <span className="ml-4 text-white">{title}</span>
      </div>
    </Link>
  );
};
