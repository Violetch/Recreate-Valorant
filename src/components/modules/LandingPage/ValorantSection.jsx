import React from "react";
import ReactPlayer from "react-player";
import { useMediaQuery } from "react-responsive";

const ValorantSection = () => {
  const isValorantTitle = useMediaQuery({ query: "(max-width: 1470px)" });
  const isValorantSmall = useMediaQuery({ query: "(max-width: 935px)" });

  const Tungsten = {
    fontFamily: `"Tungsten-Bold", sans-serif`,
  };
  const DINNextW1G = {
    fontFamily: `"DINNextW1G-Regular", sans-serif`,
  };

  return (
    <div className="flex justify-center bg-neutral-200">
      <div className="vl-wrapper-content h-[580px] w-4/5 flex justify-between items-center gap-14">
        <div>
          <div className="vl-title text-9xl text-slate-900" style={Tungsten}>
            {isValorantSmall ? (
              <>
                <h1>WE ARE VALORANT</h1>
              </>
            ) : (
              <>
                <h1>WE ARE</h1>
                <h1>VALORANT</h1>
              </>
            )}
          </div>
          <div className="mt-2 text-slate-900" style={DINNextW1G}>
            <p>DEFY THE LIMITS</p>
            {isValorantTitle ? (
              <p className="vl-description">
                Blend your style and experience on a global, competitive stage.
                You <br /> have 13 rounds to attack and defend your side using
                sharp gunplay <br /> and tactical abilities. And, with one life
                per-round, you'll need to think <br /> faster than your opponent
                if you want to survive. Take on foes across <br /> Competitive
                and Unranked modes as well as Deathmatch and Spike Rush.
              </p>
            ) : (
              <p>
                Blend your style and experience on a global, competitive stage.
                You have 13 rounds to <br /> attack and defend your side using
                sharp gunplay and tactical abilities. And, with one life <br />
                per-round, you'll need to think faster than your opponent if you
                want to survive. Take on <br /> foes across Competitive and
                Unranked modes as well as Deathmatch and Spike Rush.
              </p>
            )}
          </div>
          <div className="vl-wrapper-button mt-12" style={DINNextW1G}>
            <button className="vl-button bg-[#FD4556] px-8 py-4 hover:bg-slate-900 text-slate-100 hover:text-slate-100 duration-300">
              LEARN THE GAME
            </button>
          </div>
        </div>
        <div className="vl-video w-[665px]">
          <ReactPlayer
            url="./video-1.mp4"
            width={"100%"}
            height={"100%"}
            loop={true}
            playing={true}
            muted={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ValorantSection;
