import Navbar from "../../modules/Navbar/Navbar";
import { atomDropDown, atomIsBars } from "../../../jotai";
import { useAtom } from "jotai";
import { ReactNode, useEffect, useRef } from "react";
import Footer from "../../modules/Footer/Footer";

interface TypeLandingLayout {
  children: ReactNode;
}

const LandingLayout = ({ children }: TypeLandingLayout) => {
  const [isDropDown] = useAtom<boolean>(atomDropDown);
  const [isBars, setIsBars] = useAtom<boolean>(atomIsBars);
  const scrollPositionRef = useRef<number>(0);

  useEffect(() => {
    if (isDropDown || isBars) {
      scrollPositionRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      window.scrollTo(0, scrollPositionRef.current);
    } else {
      scrollPositionRef.current;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, scrollPositionRef.current);
    }
  }, [isDropDown, isBars]);

  {
    isDropDown && setIsBars(false);
  }

  return (
    <div className="relative">
      <Navbar />
      <div
        className={`${isDropDown || isBars ? "opacity-40" : ""} duration-200`}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default LandingLayout;
