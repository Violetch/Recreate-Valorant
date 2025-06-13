import { useAtom } from "jotai";
import { useState } from "react";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { atomDropDown } from "../../../jotai";
import { motion } from "framer-motion";
import BigScreenDropdown from "./BigScreenDropdown";
import { useMediaQuery } from "react-responsive";
import SmallScreenDropdown from "./SmallScreenDropdown";

const Dropdown = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isDropDown, setIsDropDown] = useAtom<boolean>(atomDropDown);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 835px)" });

  const Arial = {
    fontFamily: `"Arial", sans-serif`,
  };

  return (
    <>
      {isDropDown ? (
        <motion.div
          className=" responsive-dropdown h-[480px] bg-neutral-100 absolute inset-0 z-50 px-8 py-6 overflow-y-scroll"
          initial={{ translateY: "-100%" }}
          animate={{ translateY: 0 }}
          transition={{ duration: 0.2 }}
          style={Arial}
        >
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center  group">
                <img
                  className="w-[75px] cursor-pointer"
                  src={isHover ? "./icon-10.png" : "./icon-11.png"}
                  alt="riot"
                  onMouseOut={() => setIsHover(false)}
                  onClick={() => setIsDropDown(false)}
                  onMouseEnter={() => setIsHover(true)}
                />
                <MdOutlineArrowDropUp
                  className="group-hover:text-[#FD4556]"
                  size={16}
                />
              </div>
              <div
                className="text-slate-900  bg-neutral-200 p-2 rounded-[12px] cursor-pointer"
                onClick={() => setIsDropDown(false)}
              >
                <RxCross2 />
              </div>
            </div>
            {isSmallScreen ? <SmallScreenDropdown /> : <BigScreenDropdown />}
          </motion.div>
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
};

export default Dropdown;
