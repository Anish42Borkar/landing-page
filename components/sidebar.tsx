import Image from "next/image";
import React from "react";
import { list } from "./navbar";
import Link from "next/link";
import { useSidebarContext } from "@/provider/sidebar-provider";

const Sidebar = () => {
  const { sidebar, toggle } = useSidebarContext();

  return (
    <div
      className={`w-60 h-screen fixed  ${
        sidebar ? "translate-x-0" : "-translate-x-[100vw]"
      } top-0 bg-white z-40`}
    >
      <Image
        width={40}
        height={40}
        className=" absolute right-0 cursor-pointer"
        src="/assets/icons/close.svg"
        alt="logo"
        onClick={() => toggle()}
      />

      <div className="flex flex-col gap-6  self-center">
        {list.map((link) => (
          <Link
            key={link.title}
            href={"#" + link.ref}
            className=" text-black px-2 py-4 hover:bg-gray-500/30"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
