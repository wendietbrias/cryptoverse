import logo from "../assets/cryptocurrency.png";
import { AiOutlineHome } from "react-icons/ai";
import { VscGraphLine } from "react-icons/vsc";
import { FaExchangeAlt } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="w-[21%] fixed left-0 top-0 h-screen bg-gray-800">
      <Link href="/">
        <div className="cursor-pointer flex items-center py-4 px-7">
          <img className="w-12 h-12 mr-5" src={logo.src} alt="logo" />
          <p className="text-white font-bold text-2xl">CryptoVerse</p>
        </div>
      </Link>
      <ul className="w-full  mt-5">
        <li className="w-full py-4 hover:bg-blue-500 transition duration-500 px-7">
          <Link href="/">
            <span className="text-blue-100 flex items-cente cursor-pointer">
              <AiOutlineHome className="text-xl mr-4" />
              <p className="font-medium text-sm">Home</p>
            </span>
          </Link>
        </li>
        <li className="w-full py-4 hover:bg-blue-500 transition duration-500 px-7">
          <Link href="/cryptocurrency">
            <span className="text-blue-100 flex items-cente cursor-pointer">
              <VscGraphLine className="text-xl mr-4" />
              <p className="font-medium text-sm">Cryptocurrencies</p>
            </span>
          </Link>
        </li>
        <li className="w-full py-4 hover:bg-blue-500 transition duration-500 px-7">
          <Link href="/">
            <span className="text-blue-100 flex items-cente cursor-pointer">
              <FaExchangeAlt className="text-xl mr-4" />
              <p className="font-medium text-sm">Exchanges</p>
            </span>
          </Link>
        </li>
        <li className="w-full py-4 hover:bg-blue-500 transition duration-500 px-7">
          <Link href="/">
            <span className="text-blue-100 flex items-cente cursor-pointer">
              <BsNewspaper className="text-xl mr-4" />
              <p className="font-medium text-sm">News</p>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
