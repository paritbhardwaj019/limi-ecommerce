import React from "react";
import { AlignJustify, Sun, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full bg-[#2d3436] fixed top-0 pl-[256px] right-0 h-12 pr-4 text-white">
      <button className="cursor-pointer">
        <AlignJustify className="size-5" />
      </button>

      <div className="flex items-center gap-4">
        <Sun className="size-5 text-white cursor-pointer" />
        <Bell className="size-5 text-white cursor-pointer" />
      </div>
    </nav>
  );
}
