import { useState } from "react";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { useAtom } from "jotai";
import { atomIsBars } from "../../../jotai";
import { IoSearch } from "react-icons/io5";
import { MENU_BARS } from "../../../constants/RiotGameList";
import { MdArrowOutward, MdOutlineArrowDropDown } from "react-icons/md";

const HamburgerMenu = () => {
  const [isBars, setIsBars] = useAtom<boolean>(atomIsBars);
  const [isList, setIsList] = useState<null | number>(null);
  const [inputValue, setInputValue] = useState<string>("");

  const handleClick = (index: number) => {
    setIsList((prevIndex) => (prevIndex === index ? null : index));
  };

  const font = {
    fontFamily: `"Mark W05 Medium", sans-serif`,
  };

  return (
    <>
      {isBars && (
        <motion.div
          className="hamburger-menu w-[450px] h-full bg-neutral-900 z-50 absolute top-0 right-0  py-4 px-3"
          initial={{ translateX: "100%", opacity: 0 }}
          animate={{ translateX: "0", opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex justify-between items-center">
            <img className="w-[45px]" src="./icon-5.png" alt="valorant" />
            <div
              className="text-neutral-100  bg-neutral-800 p-3 rounded-[16px] cursor-pointer"
              onClick={() => setIsBars(false)}
            >
              <RxCross2 size={"20px"} />
            </div>
          </div>
          <div className="flex justify-between items-center relative mt-5">
            <input
              className="bg-neutral-800 w-full py-2 rounded-xl px-12 font-bold text-neutral-100 tracking-widest"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <IoSearch className="absolute left-3" size={"25px"} />
            <RxCross2
              className="absolute right-3"
              size={"20px"}
              onClick={() => setInputValue("")}
            />
          </div>
          <div className="mt-6" style={font}>
            {MENU_BARS.map((item, index) => (
              <div key={index} onClick={() => handleClick(index)}>
                <a
                  className="cursor-pointer flex justify-between items-center mt-2 px-4 py-2 text-neutral-100 hover:bg-neutral-100/10 hover:text-[#FD4556] tracking-widest rounded-md font-bold text-[15px]"
                  href={item.url}
                >
                  <h1>{item.title}</h1>
                  {item.desc && (
                    <MdOutlineArrowDropDown
                      className={`text-neutral-600 duration-300 ${
                        isList === index ? "rotate-180" : "rotate-0"
                      }`}
                      size={25}
                    />
                  )}
                  {item.icon && (
                    <MdArrowOutward
                      className="text-neutral-600 mr-1"
                      size={15}
                    />
                  )}
                </a>
                {isList === index && (
                  <div>
                    {item.desc &&
                      Array.isArray(item.desc) &&
                      item.desc.length > 0 && (
                        <ul>
                          {item.desc.map((desc, descIndex) => (
                            <li
                              className="cursor-pointer  mt-2 px-4 py-2 text-neutral-100/70 hover:bg-neutral-100/10 hover:text-neutral-100 tracking-widest rounded-md font-bold text-[15px]"
                              key={descIndex}
                            >
                              <a href={desc.url}>{desc.title}</a>
                            </li>
                          ))}
                        </ul>
                      )}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div style={font}>
            <button className="bg-[#FD4556] mt-10 tracking-widest rounded-xl text-neutral-900 w-full py-2 font-semibold">
              PLAY NOW
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default HamburgerMenu;
