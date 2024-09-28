import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { AiFillDiscord } from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  const W05 = {
    fontFamily: `"W05", sans-serif`,
  };

  return (
    <div style={W05}>
      <div className="fo-wrapper-dd flex justify-center items-center text-[12px] tracking-widest  bg-neutral-800 text-neutral-100 gap-1 py-6  text-center">
        <p className="py-2 px-5 rounded-md hover:bg-neutral-100/10 duration-200 cursor-pointer">
          DOWNLOAD GAME CLIENT
        </p>
        <p className="py-2 px-5 rounded-md hover:bg-neutral-100/10 duration-200 cursor-pointer">
          DOWNLOAD RIOT MOBILE COMPANION APP
        </p>
      </div>
      <div className="flex flex-col items-center bg-[#111111] py-6">
        <div className="flex gap-3">
          <div className="bg-neutral-100/10 p-2 rounded-xl text-neutral-100 cursor-pointer">
            <FaXTwitter />
          </div>
          <div className="bg-neutral-100/10 p-2 rounded-xl text-neutral-100 cursor-pointer">
            <FaYoutube />
          </div>
          <div className="bg-neutral-100/10 p-2 rounded-xl text-neutral-100 cursor-pointer">
            <FaInstagram />
          </div>
          <div className="bg-neutral-100/10 p-2 rounded-xl text-neutral-100 cursor-pointer">
            <AiFillTikTok />
          </div>
          <div className="bg-neutral-100/10 p-2 rounded-xl text-neutral-100 cursor-pointer">
            <FaFacebook />
          </div>
          <div className="bg-neutral-100/10 p-2 rounded-xl text-neutral-100 cursor-pointer">
            <AiFillDiscord />
          </div>
        </div>
        <div className="flex items-end gap-7 mt-10 mb-5">
          <img
            className="w-[90px] h-full opacity-30 hover:opacity-100"
            src="./icon-8.png"
            onMouseLeave={() => setIsIcon(false)}
          />
          <img className="w-[70px]" src="./icon-12.png" />
        </div>
        <div className="text-[10px] text-center text-neutral-100/40">
          <p>
            © 2020-2024 Riot Games, Inc. RIOT GAMES, VALORANT and any associated
            logos are trademarks, service <br /> marks, and/or registered
            trademarks of Riot Games, Inc.
          </p>
        </div>

        <div className="fo-wrapper-ptc flex items-center gap-1 text-[11px] text-neutral-100 tracking-widest mt-6 mb-6">
          <p className="py-2 px-5 rounded-md hover:bg-neutral-100/10 duration-200 cursor-pointer">
            PRIVACY NOTICE
          </p>
          <p className="py-2 px-5 rounded-md hover:bg-neutral-100/10 duration-200 cursor-pointer">
            TERMS OF SERVICE
          </p>
          <p className="py-2 px-5 rounded-md hover:bg-neutral-100/10 duration-200 cursor-pointer">
            COOKIE PREFERENCES
          </p>
        </div>
        <div className="flex gap-3 p-3 bg-neutral-100/10 w-fit rounded-lg">
          <img src="./img-11.png" />
          <div className="text-[11px] text-neutral-100 flex flex-col justify-between">
            <p>Blood</p>
            <p>Language</p>
            <p>Violance</p>
            <p>User interact</p>
            <p>In-Game Purchases</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
