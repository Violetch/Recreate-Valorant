import { useMediaQuery } from "react-responsive";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const ArticleSection = () => {
  const isArticleMedium = useMediaQuery({ query: "(min-width: 1025px)" });
  const isArticleSmall = useMediaQuery({ query: "(min-width: 600px)" });

  const Tungsten = {
    fontFamily: `"Tungsten-Bold", sans-serif`,
  };
  const DINNextW1G = {
    fontFamily: `"DINNextW1G-Regular", sans-serif`,
  };

  return (
    <div
      className="bg-cover bg-center w-full h-[565px] py-8 flex items-center justify-center"
      style={{ backgroundImage: "url(./img-3.webp)" }}
    >
      <div className="content-article w-4/5 h-full">
        <div className="flex justify-between items-center text-neutral-900">
          <h1
            className={`${isArticleMedium ? "text-[43px]" : "text-[25px]"}`}
            style={Tungsten}
          >
            THE LATEST
          </h1>
          <div className="flex items-center gap-1 cursor-pointer">
            <p
              className="hover:text-neutral-500 duration-300"
              style={DINNextW1G}
            >
              GO TO NEWS PAGE
            </p>
            <BsBoxArrowInUpRight className="text-[#FD4556]" size={"23px"} />
          </div>
        </div>
        <div
          className="mt-10 flex gap-7 items-start justify-center cursor-pointer"
          style={DINNextW1G}
        >
          <div className=" flex flex-col justify-center items-start text-neutral-900 w-fit">
            <div className="group bg-slate-500 overflow-hidden relative">
              <img
                className="w-[600px] group-hover:scale-110 duration-300"
                src="./img-8.webp"
                alt=""
              />
              <div className="absolute bottom-0 right-0 p-4 border border-neutral-100/50">
                <BsBoxArrowInUpRight
                  className="text-neutral-100 inset-0"
                  size={"10px"}
                />
              </div>
            </div>
            <div className="flex gap-1 text-[13px] mt-3">
              <p className="font-bold tracking-wider text-[#FD4556]">
                GAME UPDATE
              </p>
              <p>|</p>
              <p className="font-semibold tracking-wider">4 weeks ago</p>
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <h1 className="font-bold text-xl">
                ALL PATHS END HERE // Vyse <br /> Agent Trailer - VALORANT
              </h1>
              <p className="text-[15px]">
                All paths end with Vyse-lethal tactician, metal <br />
                manipulator, and the newest Sentinel Agent in VALORANT.
              </p>
            </div>
          </div>
          {isArticleSmall && (
            <div className=" flex flex-col justify-center items-start text-neutral-900 w-fit">
              <div className="group bg-slate-500 overflow-hidden relative">
                <img
                  className="w-[600px] group-hover:scale-110 duration-300"
                  src="./img-6.webp"
                  alt=""
                />
                <div className="absolute bottom-0 right-0 p-4 border border-neutral-100/50">
                  <BsBoxArrowInUpRight
                    className="text-neutral-100 inset-0"
                    size={"10px"}
                  />
                </div>
              </div>
              <div className="flex gap-1 text-[13px] mt-3">
                <p className="font-bold tracking-wider text-[#FD4556]">
                  GAME UPDATE
                </p>
                <p>|</p>
                <p className="font-semibold tracking-wider">4 weeks ago</p>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <h1 className="font-bold text-xl">
                  Vyse Gameplay Reveal Trailer
                </h1>
                <p className="text-[15px]">
                  See the master tactician Vyse in action <br /> before she
                  launches in Episode 09: Act II.
                </p>
              </div>
            </div>
          )}
          {isArticleMedium && (
            <div className="flex flex-col justify-center items-start text-neutral-900 w-fit">
              <div className="group bg-slate-500 overflow-hidden relative">
                <img
                  className="w-[600px] group-hover:scale-110 duration-300"
                  src="./img-9.webp"
                  alt=""
                />
                <div className="absolute bottom-0 right-0 p-4 border border-neutral-100/50">
                  <BsBoxArrowInUpRight
                    className="text-neutral-100 inset-0"
                    size={"10px"}
                  />
                </div>
              </div>
              <div className="flex gap-1 text-[13px] mt-3">
                <p className="font-semibold tracking-wider">3 weeks ago</p>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <h1 className="font-bold text-xl">
                  Ascension Tickets: Come <br /> to the event in Monterrey!
                </h1>
                <p className="text-[15px]">
                  This Mexican city will welcome hundreds of <br /> VALORANT
                  fans. You can be one of them!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;
