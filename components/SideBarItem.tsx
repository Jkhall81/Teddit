import { cn } from "@/lib/utils";

interface SideBarItemProps {
  title: string;
  icon: React.ComponentType<{ size: number; color: string; className: string }>;
  size: number;
  iconStyles: string;
}

export const SideBarItem = ({
  title,
  icon,
  size,
  iconStyles,
}: SideBarItemProps) => {
  const IconComponent = icon;

  return (
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
  );
};
