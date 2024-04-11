import { FaReddit } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineQrCode2 } from "react-icons/md";

import { Separator } from "@/components/ui/separator";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

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
          <Link className="flex items-center" href="/">
            <FaReddit color="red" size={35} className="mx-4" />
            <span className="text-3xl font-bold text-white">Teddit</span>
          </Link>
        </div>
        <div>
          <CiSearch className="absolute top-4 ml-2" color="white" size={30} />
          <Input placeholder="Search Teddit" />
        </div>
        <div className="flex items-center">
          <Button className="mr-2 hidden lg:flex" variant="app" size="sm">
            <MdOutlineQrCode2 className="mr-2" color="white" size={25} />
            <span className="text-white">Get app</span>
          </Button>
          <Button className="mr-5" variant="destructive" size="sm">
            Log in
          </Button>
          <BsThreeDots
            color="white"
            className="mr-5 hover:cursor-pointer"
            size={25}
          />
        </div>
      </nav>
      <Separator orientation="horizontal" className="" />
    </div>
  );
};
