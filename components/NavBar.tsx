import { FaReddit } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { Separator } from "@/components/ui/separator";
import { Input } from "./ui/input";

export const NavBar = () => {
  return (
    <div>
      <nav className="flex h-[60px] items-center justify-between">
        <div className="flex items-center">
          <RxHamburgerMenu
            color="white"
            size={35}
            className="ml-5 hover:cursor-pointer lg:hidden"
          />
          <FaReddit color="red" size={35} className="mx-4" />
          <span className="text-3xl font-bold text-white">Teddit</span>
        </div>
        <div>
          <CiSearch className="absolute top-4 ml-2" color="white" size={30} />
          <Input placeholder="Search Teddit" />
        </div>
        <div></div>
      </nav>
      <Separator orientation="horizontal" className="" />
    </div>
  );
};
