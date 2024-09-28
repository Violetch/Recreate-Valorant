import {
  BUSINESS,
  ENTERTAINMENT,
  ESPORTS,
  FORGE,
  GAME,
} from "../../../constants/RiotGameList";
import { motion } from "framer-motion";
import Mapping from "../../../utils/mapping";

export const Game = ({ isIndex, setIsIndex, setIsHoverImg, isSmallScreen }) => {
  return (
    <div>
      <p className="bg-neutral-200/40 tracking-widest text-[#151515] font-semibold px-4 py-[5px] text-[12px] rounded-md">
        GAMES
      </p>
      <Mapping
        of={GAME}
        render={(item, index) => (
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
        )}
      />
    </div>
  );
};

export const Forge = () => {
  return (
    <div>
      <p className="bg-neutral-200/40 tracking-widest text-[#151515] font-semibold px-4 py-[5px] text-[12px] rounded-md">
        FORGE
      </p>
      <Mapping
        of={FORGE}
        render={(item, index) => (
          <div key={index}>
            {" "}
            <ul>
              <li className="text-neutral-600 hover:bg-neutral-400/20 hover:text-[#FD4556] px-4 py-[5px] mt-1 text-[12px] rounded-md">
                <a href="/">{item.title}</a>
              </li>
            </ul>
          </div>
        )}
      />
    </div>
  );
};

export const Entertainment = () => {
  return (
    <div>
      <p className="bg-neutral-200/40 tracking-widest text-[#151515] font-semibold px-4 py-[5px] text-[12px] rounded-md">
        ENTERTAINMENT
      </p>
      <Mapping
        of={ENTERTAINMENT}
        render={(item, index) => (
          <div key={index}>
            <ul>
              <li className="text-neutral-600 hover:bg-neutral-400/20 hover:text-[#FD4556] px-4 py-[5px] mt-1 text-[12px] rounded-md">
                <a href="/">{item.title}</a>
              </li>
            </ul>
          </div>
        )}
      />
    </div>
  );
};

export const Esports = () => {
  return (
    <div>
      <p className="bg-neutral-200/40 tracking-widest text-[#151515] font-semibold px-4 py-[5px] text-[12px] rounded-md">
        ESPORTS
      </p>
      <Mapping
        of={ESPORTS}
        render={(item, index) => (
          <div key={index}>
            <ul>
              <li className="text-neutral-600 hover:bg-neutral-400/20 hover:text-[#FD4556] px-4 py-[5px] mt-1 text-[12px] rounded-md">
                <a href="/">{item.title}</a>
              </li>
            </ul>
          </div>
        )}
      />
    </div>
  );
};

export const Business = () => {
  return (
    <div>
      <p className="bg-neutral-200/40 tracking-widest text-[#151515] font-semibold px-4 py-[5px] text-[12px] rounded-md">
        BUSINESS
      </p>
      <Mapping
        of={BUSINESS}
        render={(item, index) => (
          <div key={index}>
            <ul>
              <li className="text-neutral-600 hover:bg-neutral-400/20 hover:text-[#FD4556] px-4 py-[5px] mt-1 text-[12px] rounded-md">
                <a href="/">{item.title}</a>
              </li>
            </ul>
          </div>
        )}
      />
    </div>
  );
};
