import { motion } from "framer-motion";

export const ImgBigscreen = () => {
  return (
    <motion.div
      className="riotgames-image w-1/2 flex text-[13px] text-neutral-900 gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <img
          className="shadow-md hover:shadow-xl duration-200 rounded-[8px]"
          src="./img-6.jpg"
          alt=""
        />
        <p className="mt-3 leading-[15px]">
          Conjure up some chaos and master your magic in TFTs latest set.
        </p>
      </div>
      <div>
        <img
          className="shadow-md hover:shadow-xl duration-200 rounded-[8px]"
          src="./img-5.jpg"
          alt=""
        />
        <p className="mt-3 leading-[15px]">
          Defy your limits with VALORANT // Live on Xbox Series X|S, PS5®, and
          PC.
        </p>
      </div>
    </motion.div>
  );
};

export const ImgSmallScreen = () => {
  return (
    <div className="h-full w-full flex flex-col text-[13px] text-neutral-900 gap-4 mt-10">
      <div>
        <img
          className="shadow-md hover:shadow-xl duration-200 rounded-[8px]"
          src="./img-6.jpg"
          alt=""
        />
        <p className="mt-3 leading-[15px]">
          Conjure up some chaos and master your magic in TFTs latest set.
        </p>
      </div>
      <div>
        <img
          className="shadow-md hover:shadow-xl duration-200 rounded-[8px]"
          src="./img-5.jpg"
          alt=""
        />
        <p className="mt-3 leading-[15px]">
          Defy your limits with VALORANT // Live on Xbox Series X|S, PS5®, and
          PC.
        </p>
      </div>
    </div>
  );
};
