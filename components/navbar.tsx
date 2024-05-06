import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./button";

const list = [
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
  return (
    <nav className="flex justify-between py-4 px-10 absolute w-full ">
      <Image width={100} height={50} src="/assets/logo.png" alt="logo" />
      <div className="flex gap-6 self-center">
        {list.map((link) => (
          <Link key={link.title} href={"#" + link.ref} className="nav-link">
            {link.title}
          </Link>
        ))}
      </div>
      <Button label="BUY TICKETS" icon="/assets/icons/arrow 2.png" />
    </nav>
  );
};

export default Navbar;
