import { FC } from "react";
import sprite from "../../img/sprite.svg";

interface IProps {
  className: string;
  name: string;
  width?: number;
  height?: number;
}

const Icon: FC<IProps> = ({ name, width, height, className }) => (
  <svg width={width} height={height} className={className}>
    <use xlinkHref={`${sprite}#${name}`} />
  </svg>
);

export default Icon;
