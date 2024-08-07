import React from "react";
import { logo } from "../public/assets/images/index";
import Image from "next/image";
import { IoSearch, IoSearchOutline } from "react-icons/io5";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import NavbarBottom from "./NavbarBottom";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full bg-blue text-white sticky top-0 z-50">
      <div className="w-full h-full border-b-[1px] border-b-white">
        <div className="max-w-Container mx-auto h-20 px-4 flex items-center gap-2">
          <Link href={"/"}>
            <div className="navBarHover">
              <Image src={logo} className="w-44" alt="Logo" />
            </div>
          </Link>

          <div className="navBarHover">
            <div className="w-4 grid grid-cols-2 gap-[2px]">
              <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
              <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
              <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
              <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
            </div>
            <p className="text-base font-semibold">Departments</p>
          </div>

          <div className="navBarHover">
            <div className="w-4 grid grid-cols-2 gap-[2px]">
              <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
              <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
              <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
              <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
            </div>
            <p className="text-base font-semibold">Services</p>
          </div>

          <div className="h-10 flex flex-1 relative">
            <input
              className="h-full w-full rounded-full px-4 text-black text-base outline-none
          border-[1px] border-transparent focus-visible:border-black duration-200"
              type="text"
              placeholder="Search Everything at Shopnext online and In store"
            />
            <span
              className="absolute w-8 h-8 rounded-full flex items-center justify-center
                        top-1 right-1 bg-yellow text-black text-xl"
            >
              <IoSearchOutline />
            </span>
          </div>
          <div className="navBarHover">
            <AiOutlineHeart />
            <div>
              <p className="text-xs">Recorder</p>
              <h2 className="text-base font-semibold -mt-1">My Items</h2>
            </div>
          </div>

          <div className="navBarHover">
            <AiOutlineUser className="text-lg" />
            <div>
              <p className="text-xs">Sign In</p>
              <h2 className="text-base font-semibold -mt-1">Account</h2>
            </div>
          </div>

          <Link href="/cart">
          <div
            className="flex flex-col justify-center items-center 
                       gap-2 h-12 px-15 rounded-full hover:bg-hoverBg duration-300 relative"
          >
            <BsCart2 className="text-2xl" />
            <p className="text-[10px] -mt-2">$0.00</p>
            <span
              className="absolute w-4 h-4 bg-yellow text-black top-0 right-4 rounded-full
                        flex items-center justify-center font-bodyFont text-xs"
            >
              0
            </span>
          </div>
          </Link>
        </div>
      </div>
      <div className="w-full bg-blue text-white">
        <NavbarBottom />
      </div>
    </div>
  );
};

export default Navbar;
