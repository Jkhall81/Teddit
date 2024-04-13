import { SideBarHeader } from "./SideBarHeader";
import { Separator } from "./ui/separator";
import { DrawerComponent } from "./DrawerComponent";

export const SideBar = () => {
  return (
    <aside className="left-0 top-0 mt-[60px] hidden h-screen w-[380px] border-r border-white lg:flex">
      <div className="w-full">
        <SideBarHeader />
        <Separator className="ml-7 mt-5 w-[80%] bg-gray-600" />
        <DrawerComponent title="TOPICS" />
        <Separator className="ml-7 mt-5 w-[80%] bg-gray-600" />
      </div>
    </aside>
  );
};
