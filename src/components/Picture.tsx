import { FC } from "react";

interface IProps {
  mob1x: string;
  mob2x: string;
  tab1x: string;
  tab2x: string;
  desk1x: string;
  desk2x: string;
  alt: string;
  className: string;
}

const Picture: FC<IProps> = ({
  mob1x,
  mob2x,
  tab1x,
  tab2x,
  desk1x,
  desk2x,
  alt,
  className,
}) => {
  return (
    <picture>
      <source
        media="(min-width: 1280px)"
        srcSet={`${desk1x} 1x, ${desk2x} 2x`}
        type="image/png"
        width={592}
        height={654}
      />
      <source
        media="(min-width: 768px)"
        srcSet={`${tab1x} 1x, ${tab2x} 2x`}
        type="image/png"
        width={704}
        height={496}
      />
      <source
        media="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
        srcSet={`${mob1x} 1x, ${mob2x} 2x`}
        type="image/png"
        width={335}
        height={402}
      />
      <img src={mob1x} alt={alt} className={className} />
    </picture>
  );
};

export default Picture;
