import logo from "../assets/cryptocurrency.png";
import { AiOutlineHome } from "react-icons/ai";
import { VscGraphLine } from "react-icons/vsc";
import { FaExchangeAlt } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  const pathLists = [
    {
      title: "Home",
      path: "/",
      icon: <AiOutlineHome className="text-xl" />,
    },
    {
      title: "Cryptocurrency",
      path: "/cryptocurrency",
      icon: <VscGraphLine className="text-xl" />,
    },
    {
      title: "Exchanges",
      path: "/exchanges",
      icon: <FaExchangeAlt className="text-xl" />,
    },
    {
      title: "News",
      path: "/news",
      icon: <BsNewspaper className="text-xl" />,
    },
  ];

  return (
    <div className="w-[21%] fixed left-0 top-0 h-screen bg-gray-800">
      <Link href="/">
        <div className="cursor-pointer flex items-center py-4 px-7">
          <img className="w-12 h-12 mr-5" src={logo.src} alt="logo" />
          <p className="text-white font-bold text-2xl">CryptoVerse</p>
        </div>
      </Link>
      <ul className="w-full  mt-5">
        {pathLists.map((item, idx) => (
          <li
            key={idx}
            className={`w-full py-4 hover:bg-blue-500 transition duration-500 px-7 ${
              router.pathname == item.path ? "bg-blue-500" : ""
            }`}
          >
            <Link href={item?.path}>
              <span className="text-blue-100 flex items-cente cursor-pointer">
                {item?.icon}
                <p className="ml-5 font-medium text-sm">{item?.title}</p>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
