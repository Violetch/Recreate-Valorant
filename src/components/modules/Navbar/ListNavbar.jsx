import DropdownRiot from "./DropdownRiot";
import { Esports, GameInfo, OurSocials, Support } from "./DropdownListNavbar";

const ListNavbar = () => {
  return (
    <>
      <div className="flex items-center text-white  tracking-[1.5px] text-[10.5px]">
        <GameInfo />
        <ul className="flex">
          <li className="responsive-2 relative list-none hover:bg-white/10 rounded-md py-[5px] px-4 li-underline">
            <a href="/">MEDIA</a>
          </li>
          <li className="responsive-3 relative list-none hover:bg-white/10 rounded-md py-[5px] px-4 li-underline">
            <a href="/">NEWS</a>
          </li>
          <li className="responsive-4 relative list-none hover:bg-white/10 rounded-md py-[5px] px-4 li-underline">
            <a href="/">LEADERBOARDS</a>
          </li>
        </ul>
        <Support />
        <OurSocials />
        <Esports />
        <ul>
          <li className="responsive-8 relative list-none hover:bg-white/10 rounded-md py-[5px] px-4 li-underline">
            <a href="/">PBE SIGNUP</a>
          </li>
        </ul>
      </div>
      <DropdownRiot />
    </>
  );
};

export default ListNavbar;
