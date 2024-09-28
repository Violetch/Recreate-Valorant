import React from "react";
import { useMediaQuery } from "react-responsive";

const ConsoleSection = () => {
  const isConsoleBig = useMediaQuery({ query: "(min-width: 1518px)" });
  const isConsoleMedium = useMediaQuery({ query: "(min-width: 1025px)" });
  const isConsoleSmall = useMediaQuery({ query: "(max-width: 600px)" });

  const Tungsten = {
    fontFamily: `"Tungsten-Bold", sans-serif`,
  };
  const DINNextW1G = {
    fontFamily: `"DINNextW1G-Regular", sans-serif`,
  };

  return (
    <div
      className="console-responsive flex justify-center bg-cover bg-center h-[580px]"
      style={{ backgroundImage: "url(./background-17.jpeg)" }}
    >
      <div
        className={`flex flex-col gap-4 justify-center items-start h-full ${
          isConsoleBig ? " w-4/5" : "w-[90%]"
        }`}
      >
        {isConsoleMedium ? (
          <div className="text-neutral-100 text-9xl" style={Tungsten}>
            <h1>CONSOLE</h1>
            <h1>LAUNCH</h1>
          </div>
        ) : (
          <div className="text-neutral-100 text-6xl" style={Tungsten}>
            <h1>CONSOLE LAUNCH</h1>
          </div>
        )}
        <div
          className={`flex flex-col text-[15px] gap-2 tracking-wider text-neutral-100 ${
            isConsoleSmall && "w-full"
          }`}
          style={DINNextW1G}
        >
          <p>VALORANT // YR 4</p>
          <button className="bg-slate-900 px-8 py-4 hover:bg-neutral-100 hover:text-slate-900 duration-300 w-full">
            PLAY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsoleSection;
