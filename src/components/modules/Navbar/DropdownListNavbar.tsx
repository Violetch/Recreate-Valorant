import { MdArrowOutward, MdOutlineArrowDropDown } from "react-icons/md";

export const GameInfo = () => {
  return (
    <div className="responsive-1 dropdown dropdown-hover">
      <ul>
        <li
          tabIndex={0}
          className="flex items-center hover:bg-white/10 rounded-md gap-[2px] py-[5px] px-4"
        >
          GAME INFO
          <MdOutlineArrowDropDown className="text-neutral-400 " size={16} />
        </li>
      </ul>
      <div
        tabIndex={0}
        className="mt-[12.5px] dropdown-content menu z-10 rounded-sm p-4 bg-stone-800 gap-5 border-t-[4px] border-[#FD4556]"
      >
        <ul className="flex flex-col text-stone-300 text-[11px] gap-[5px] w-[150px]">
          <li>
            <a href="/">AGENTS</a>
          </li>
          <li>
            <a href="/">MAPS</a>
          </li>
          <li>
            <a href="/">ARSENAL</a>
          </li>
          <li>
            <a href="/">PREMIER</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const Support = () => {
  return (
    <div className="responsive-5 dropdown dropdown-hover">
      <ul>
        <li className="flex items-center gap-[2px] hover:bg-white/10 rounded-md py-[5px] px-4">
          <a href="/">SUPPORT</a>
          <MdOutlineArrowDropDown className="text-neutral-400 " size={16} />
        </li>
      </ul>
      <div
        tabIndex={0}
        className="mt-[12.5px] dropdown-content menu z-10 rounded-sm p-4 bg-stone-800 gap-5 border-t-[4px] border-[#FD4556]"
      >
        <ul className="flex flex-col text-stone-300 text-[11px] gap-[5px] w-[150px]">
          <li>
            <a href="/">SPECS</a>
          </li>
          <li>
            <a href="/">SUPPORT</a>
          </li>
          <li>
            <a href="/">COMMUNITY CODE</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const OurSocials = () => {
  return (
    <div className="responsive-6 dropdown dropdown-hover">
      <ul>
        <li className="flex items-center gap-[2px] hover:bg-white/10 rounded-md py-[5px] px-4">
          OUR SOCIALS
          <MdOutlineArrowDropDown className="text-neutral-400 " size={16} />
        </li>
      </ul>
      <div
        tabIndex={0}
        className="mt-[12.5px] dropdown-content menu z-10 rounded-sm p-4 bg-stone-800 gap-5 border-t-[4px] border-[#FD4556]"
      >
        <ul className="flex flex-col text-stone-300 text-[11px] gap-[5px] w-[150px]">
          <li>
            <a href="/">Twitter</a>
          </li>
          <li>
            <a href="/">Youtube</a>
          </li>
          <li>
            <a href="/">Instagram</a>
          </li>
          <li>
            <a href="/">Tiktok</a>
          </li>
          <li>
            <a href="/">Facebook</a>
          </li>
          <li>
            <a href="/">Discord</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const Esports = () => {
  return (
    <div className="responsive-7 dropdown dropdown-hover">
      <ul>
        <li className="flex gap-[2px] hover:bg-white/10 rounded-md py-[5px] px-4">
          ESPORTS
          <MdArrowOutward className="text-neutral-400 " size={12} />
        </li>
      </ul>
      <div
        tabIndex={0}
        className="mt-[12.5px] dropdown-content menu z-10 rounded-sm p-4 bg-stone-800 gap-5 border-t-[4px] border-[#FD4556]"
      >
        <ul className="flex flex-col text-stone-300 text-[11px] gap-[5px] w-[150px]">
          <li>
            <a href="/">AGENTS</a>
          </li>
          <li>
            <a href="/">MAPS</a>
          </li>
          <li>
            <a href="/">ARSENAL</a>
          </li>
          <li>
            <a href="/">PREMIER</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
