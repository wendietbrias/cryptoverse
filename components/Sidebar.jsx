import logo from "../assets/cryptocurrency.png";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { VscGraphLine } from "react-icons/vsc";
import { FaExchangeAlt } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  const [openBar, setOpenBar] = useState(false);

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
    <div className="w-full h-24 items-center px-7 flex justify-between xl:w-[21%] fixed xl:block xl:px-0 left-0 top-0 xl:h-screen bg-gray-800 z-50">
      <Link href="/">
        <div className="cursor-pointer flex items-center xl:py-4 xl:px-7">
          <img
            className="xl:w-12 xl:h-12 w-8 h-8 mr-5"
            src={logo.src}
            alt="logo"
          />
          <p className="text-white font-bold text-2xl">CryptoVerse</p>
        </div>
      </Link>
      <ul
        className={`xl:w-full mt-5 xl:static fixed top-0 ${
          openBar ? "left-0" : "-left-[100%]"
        } w-[70%] h-screen xl:bg-transparent bg-gray-800 transition duration-500`}
      >
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
      <button
        onClick={() => setOpenBar(!openBar)}
        className="cursor-pointer xl:hidden block"
      >
        <AiOutlineMenu className="text-white text-xl font-bold " />
      </button>
    </div>
  );
};

export default Sidebar;
