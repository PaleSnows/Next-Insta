import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="shadow-sm  p-2 sticky top-0 bg-slate-800 z-30">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* logo */}
        <Link href={"/"} className="hidden lg:inline-flex">
          <Image
            src={"/insta-removebg-preview.png"}
            width={96}
            height={96}
            alt=""
          ></Image>
        </Link>
        <Link href={"/"} className="lg:hidden ">
          <Image src={"/logo.webp"} width={40} height={40} alt=""></Image>
        </Link>
        {/* Search input */}
        <input
          type="text"
          name=""
          id=""
          placeholder="Search..."
          className="bg-slate-500 border border-slate-400 rounded py-2 px-4 text-sm w-full max-w-[210px]"
        />
        {/* menu items */}
        <button className="text-sm font-semibold text-blue-500">Login</button>
      </div>
    </div>
  );
};

export default Header;
