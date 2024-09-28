import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import {
  Business,
  Entertainment,
  Esports,
  Forge,
  Game,
} from "./DropdownListRiot";
import { ImgBigscreen } from "./DropdownImgRiot";

const BigScreenDropdown = () => {
  const [isIndex, setIsIndex] = useState(null);
  const [isHoverImg, setIsHoverImg] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1040px)" });

  return (
    <div className="flex gap-3 mt-4">
      <div className="dropdown-list grid grid-cols-3 gap-2 w-1/2">
        <Game
          isIndex={isIndex}
          setIsIndex={setIsIndex}
          setIsHoverImg={setIsHoverImg}
          isSmallScreen={isSmallScreen}
        />
        <Forge />
        <Entertainment />
        <Esports />
        <Business />
      </div>
      {!isHoverImg && <ImgBigscreen />}
    </div>
  );
};

export default BigScreenDropdown;
