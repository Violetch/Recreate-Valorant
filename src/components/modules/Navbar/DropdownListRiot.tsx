import {
  BUSINESS,
  ENTERTAINMENT,
  ESPORTS,
  FORGE,
  GAME,
} from "../../../constants/RiotGameList";
import { motion } from "framer-motion";

interface TypeGame {
  isIndex: number | null;
  setIsIndex: (index: number | null) => void;
  setIsHoverImg: (value: boolean) => void;
  isSmallScreen: boolean;
}

export const Game = ({
  isIndex,
  setIsIndex,
  setIsHoverImg,
  isSmallScreen,
}: TypeGame) => {
  return (
    <div>
      <p className="bg-neutral-200/40 tracking-widest text-[#151515] font-semibold px-4 py-[5px] text-[12px] rounded-md">
        GAMES
      </p>
      {GAME.map((item, index) => (
        <div
          key={index}
          onMouseEnter={() => {
            if (isSmallScreen) {
              return;
            } else {
              setIsIndex(index);
              setIsHoverImg(true);
            }
          }}
          onMouseLeave={() => {
            if (isSmallScreen) {
              return;
            } else {
              setIsIndex(null);
              setIsHoverImg(false);
            }
          }}
        >
          <ul>
            <li className="text-neutral-600 hover:bg-neutral-400/20 hover:text-[#FD4556] px-4 py-[5px] mt-1 text-[12px] rounded-md ">
              <a href={item.url}>{item.title}</a>
            </li>
          </ul>
          {isIndex === index && (
            <motion.div
              className="absolute right-[80px] top-[72px] w-[38%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img className="rounded-md" src={item.img} alt="img" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export const Forge = () => {
  return (
    <div>
      <p className="bg-neutral-200/40 tracking-widest text-[#151515] font-semibold px-4 py-[5px] text-[12px] rounded-md">
        FORGE
      </p>
      {FORGE.map((item, index) => (
        <div key={index}>
          {" "}
          <ul>
            <li className="text-neutral-600 hover:bg-neutral-400/20 hover:text-[#FD4556] px-4 py-[5px] mt-1 text-[12px] rounded-md">
              <a href="/">{item.title}</a>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export const Entertainment = () => {
  return (
    <div>
      <p className="bg-neutral-200/40 tracking-widest text-[#151515] font-semibold px-4 py-[5px] text-[12px] rounded-md">
        ENTERTAINMENT
      </p>
      {ENTERTAINMENT.map((item, index) => (
        <div key={index}>
          <ul>
            <li className="text-neutral-600 hover:bg-neutral-400/20 hover:text-[#FD4556] px-4 py-[5px] mt-1 text-[12px] rounded-md">
              <a href="/">{item.title}</a>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export const Esports = () => {
  return (
    <div>
      <p className="bg-neutral-200/40 tracking-widest text-[#151515] font-semibold px-4 py-[5px] text-[12px] rounded-md">
        ESPORTS
      </p>
      {ESPORTS.map((item, index) => (
        <div key={index}>
          <ul>
            <li className="text-neutral-600 hover:bg-neutral-400/20 hover:text-[#FD4556] px-4 py-[5px] mt-1 text-[12px] rounded-md">
              <a href="/">{item.title}</a>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export const Business = () => {
  return (
    <div>
      <p className="bg-neutral-200/40 tracking-widest text-[#151515] font-semibold px-4 py-[5px] text-[12px] rounded-md">
        BUSINESS
      </p>
      {BUSINESS.map((item, index) => (
        <div key={index}>
          <ul>
            <li className="text-neutral-600 hover:bg-neutral-400/20 hover:text-[#FD4556] px-4 py-[5px] mt-1 text-[12px] rounded-md">
              <a href="/">{item.title}</a>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};
