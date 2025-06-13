import { ReactNode } from "react";

interface ButtonAction {
  title: ReactNode;
  classStyle: string;
  font: React.CSSProperties;
}

const ButtonAction = ({ title, classStyle, font }: ButtonAction) => {
  return (
    <button className={classStyle} style={font}>
      {title}
    </button>
  );
};

export default ButtonAction;
