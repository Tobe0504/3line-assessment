"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import HamburgerIcon from "../assets/icons/HamburgerIcon";
import logo from "../assets/images/logo.svg";
import SideNav from "./SideNav";

const Header = () => {
  //  Refs
  const sideNavRef = useRef<HTMLDivElement | null>(null);

  //   Utils
  const openSideNav = () => {
    if (sideNavRef.current) {
      sideNavRef.current.style.width = "100%";
    }
  };

  const closeSideNav = () => {
    if (sideNavRef.current) {
      sideNavRef.current.style.width = "0%";
    }
  };

  return (
    <header className="flex items-center justify-between p-4  sticky top-0 bg-white lg:hidden">
      <div className="flex items-center gap-2.5 ">
        <Image src={logo} alt="Logo" />
        <h1 className="font-body text-md text-blue-100 font-medium">
          Untitled UI
        </h1>
      </div>
      <HamburgerIcon onClick={openSideNav} />

      <div
        className="fixed w-0 right-0 top-0 bg-white z-10 h-dvh transition-all duration-100 ease-in-out overflow-auto no-scrollbar"
        ref={sideNavRef}
      >
        <SideNav onClose={closeSideNav} />
      </div>
    </header>
  );
};

export default Header;
