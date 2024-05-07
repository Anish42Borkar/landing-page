import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./button";
import { useSidebarContext } from "@/provider/sidebar-provider";

export const list = [
  {
    title: "Home",
    ref: "home",
  },
  {
    title: "Speakers",
    ref: "speakers",
  },
  {
    title: "Sponsorship",
    ref: "sponsorship",
  },
  {
    title: "Travel",
    ref: "travel",
  },
  {
    title: "FAQ",
    ref: "faq",
  },
  {
    title: "Contact us",
    ref: "contact-us",
  },
];
const Navbar = () => {
  const { sidebar, toggle } = useSidebarContext();
  return (
    <nav className="flex justify-between py-4 px-1 md:px-10 absolute w-full ">
      <Image width={100} height={50} src="/assets/logo.png" alt="logo" />

      <div className=" gap-6 hidden md:flex self-center">
        {list.map((link) => (
          <Link key={link.title} href={"#" + link.ref} className="nav-link">
            {link.title}
          </Link>
        ))}
      </div>
      <Image
        width={40}
        height={40}
        className="burger block md:hidden"
        src="/assets/icons/burger.svg"
        alt="logo"
        onClick={() => toggle()}
      />

      <div className="hidden md:block">
        <Button label="BUY TICKETS" icon="/assets/icons/arrow2.png" />
      </div>
    </nav>
  );
};

export default Navbar;
