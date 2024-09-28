import React, { useState } from "react";
import Mapping from "../../../utils/mapping";
import { DROPDOWN_TITLE } from "../../../constants/RiotGameList";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { ImgSmallScreen } from "./DropdownImgRiot";

const SmallScreenDropdown = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="mt-7">
        <Mapping
          of={DROPDOWN_TITLE}
          render={(item, index) => (
            <div key={index}>
              <div
                className={`flex px-4 py-[9px] justify-between items-center rounded-md duration-200 mt-[10px] ${
                  activeIndex === index
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-200/40 text-neutral-900"
                }`}
                onClick={() => handleClick(index)}
              >
                <h1
                  className={`tracking-widest font-bold  text-[15px] rounded-md duration-200 ${
                    activeIndex === index ? "text-white" : "text-neutral-900"
                  }`}
                >
                  {item.title}
                </h1>
                <MdOutlineArrowDropDown
                  className={`text-neutral-600 duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  size={25}
                />
              </div>
              {activeIndex === index && (
                <div className="mb-6">
                  {item.desc.map((desc, descIndex) => (
                    <div key={descIndex} className="mt-6 cursor-pointer">
                      <img src={desc.img} className="rounded-md" />
                      <h1 className="text-neutral-600 hover:bg-neutral-400/20 hover:text-[#FD4556] px-4 py-1 rounded-md">
                        {desc.title}
                      </h1>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        />
      </div>
      <ImgSmallScreen />
    </>
  );
};

export default SmallScreenDropdown;
