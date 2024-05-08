import Image from "next/image";
import React from "react";
import { list } from "./navbar";
import Link from "next/link";
import { useSidebarContext } from "@/provider/sidebar-provider";
import Button from "./button";

const Sidebar = () => {
  const { sidebar, toggle } = useSidebarContext();

  return (
    <div
      className={`w-60 h-screen fixed  ${
        sidebar ? "translate-x-0" : "-translate-x-[100vw]"
      } top-0 bg-[#00072d] text-white z-40`}
    >
      <Image
        width={20}
        height={20}
        className="burger absolute top-2 right-0 cursor-pointer"
        src="/assets/icons/close.svg"
        alt="logo"
        onClick={() => toggle()}
      />

      <div className="flex flex-col gap-6  self-center">
        {list.map((link) => (
          <Link
            key={link.title}
            href={"#" + link.ref}
            className="  px-2 py-4 hover:bg-gray-500/30"
          >
            {link.title}
          </Link>
        ))}

        <div className="self-center">
          <Button label="BUY TICKETS" icon="/assets/icons/arrow2.png" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
