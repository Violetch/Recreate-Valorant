import ReactPlayer from "react-player";
import "./section.css";

const HeroSection = () => {
  const DINNextW1G = {
    fontFamily: `"DINNextW1G-Regular", sans-serif`,
  };

  return (
    <div className="relative flex justify-center items-center">
      <div className="z-20 bg-transparent absolute flex flex-col items-center text-white">
        <p
          className="tracking-wider text-[15px] bg-transparent"
          style={DINNextW1G}
        >
          A 5v5 character-based tactical shooter
        </p>
        <img
          className="w-[280px] mt-7 bg-transparent"
          src="./icon-10.webp"
          alt="valorant tm"
        />
        <button
          className="mt-12 bg-[#FD4556] py-3 px-7 tracking-wide custom-button relative"
          style={DINNextW1G}
        >
          PLAY FOR FREE
        </button>
      </div>
      <div className="w-full h-[580px] relative overflow-hidden">
        <div className="herosection-video absolute right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2 w-full">
          <ReactPlayer
            className="w-[500px]"
            url="./video-2.mp4"
            width={"100%"}
            height={"100%"}
            muted={true}
            loop={true}
            playing={true}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
