import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import ListNavbar from "./ListNavbar";
import { atomDropDown, atomIsBars } from "../../../jotai";
import { useAtom } from "jotai";
import { FaBars } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import HamburgerMenu from "./HamburgerMenu";

import "./navbar.css";

const Navbar = () => {
  const [isHover, setIsHover] = useState(false);
  const [, setIsDropDown] = useAtom(atomDropDown);
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [isBars, setIsBars] = useAtom(atomIsBars);
  const isMediumScreen = useMediaQuery({ query: "(max-width: 935px)" });

  const handleInput = () => {
    setIsInputOpen((prev) => !prev);
  };

  const font = {
    fontFamily: `"W05", sans-serif`,
  };

  return (
    <>
      <div
        className="responsive-navbar w-full bg-neutral-900 border border-b-[2px] border-neutral-800 flex justify-between items-center py-4 px-7 sticky top-0 z-50"
        style={font}
      >
        <div className="flex gap-7">
          <div className="flex justify-center items-center gap-3.5">
            <div
              className="flex items-center responsive-icon-1 text-neutral-400 group"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              onClick={() => setIsDropDown(true)}
            >
              <img
                className="w-[75px]"
                src={isHover ? "./icon-10.png" : "./icon-8.png"}
                alt="riot"
              />
              <MdOutlineArrowDropDown
                className="group-hover:text-[#FD4556]"
                size={16}
              />
            </div>
            <div
              className="responsive-icon-2 flex items-center group"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              onClick={() => setIsDropDown(true)}
            >
              <img
                className="w-[87px]"
                src={isHover ? "./icon-10.png" : "./icon-8.png"}
                alt="riot"
              />
              <MdOutlineArrowDropDown
                className="group-hover:text-[#FD4556]"
                size={25}
              />
            </div>
            <img
              className="valorant-icon w-[35px]"
              src="./icon-5.png"
              alt="valorant"
            />
          </div>
          <ListNavbar />
        </div>
        <div className="flex items-center gap-2 text-white">
          <div
            className={`responsive-search bg-neutral-700/50 p-5 rounded-[14px] relative duration-700 ${
              isInputOpen ? "open" : ""
            }`}
          >
            {isInputOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                onClick={handleInput}
              >
                <RxCross2
                  className="absolute right-3 y-1/2 -translate-y-1/2 opacity-40 z-20"
                  size={"20px"}
                />
              </motion.div>
            )}
            {isInputOpen && (
              <input
                className="absolute inset-0 rounded-[14px] bg-neutral-700/30 px-10"
                type="text"
              />
            )}
            <IoSearch
              className="absolute top-1/2 -translate-y-1/2 left-2 cursor-pointer z-20"
              size={24}
              onClick={handleInput}
            />
          </div>
          <div className="relative hover:bg-white/10 p-5 rounded-md">
            <HiOutlineGlobeAlt
              className="responsive-globe absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
              size={26}
            />
            <HiOutlineGlobeAlt
              className="responsive-globe-2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
              size={17}
            />
          </div>
          <button
            className="bg-[#FD4556] responsive-playnow py-[6px] px-4 rounded-[9px] font-bold text-[11px] tracking-[1.5px] text-stone-900"
            style={font}
          >
            PLAY NOW
          </button>
          <div
            className="responsive-bars p-3 bg-neutral-700/50 rounded-2xl"
            onClick={() => setIsBars(true)}
          >
            <FaBars />
          </div>
        </div>
      </div>
      {isMediumScreen && <div>{isBars && <HamburgerMenu />}</div>}
    </>
  );
};

export default Navbar;
