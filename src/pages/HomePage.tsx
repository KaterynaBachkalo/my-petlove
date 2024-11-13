import DeskImage1x from "../img/home_page/desk/image@1x.png";
import DeskImage2x from "../img/home_page/desk/image@2x.png";
import TabImage1x from "../img/home_page/tab/image@2x.png";
import TabImage2x from "../img/home_page/tab/image@2x.png";
import MobImage1x from "../img/home_page/mob/image@2x.png";
import MobImage2x from "../img/home_page/mob/image@2x.png";

const HomePage = () => {
  return (
    <div className="home-wrap">
      <div className="home-back">
        <h2 className="home-title">
          Take good <span className="home-span">care</span> of your small pets
        </h2>
        <p className="home-text">
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </p>
      </div>
      <picture className="home-picture">
        <source
          media="(min-width: 1280px)"
          srcSet={`${DeskImage1x} 1x, ${DeskImage2x} 2x`}
          type="image/png"
          width={592}
          height={654}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${TabImage1x} 1x, ${TabImage2x} 2x`}
          type="image/png"
          width={704}
          height={496}
        />
        <source
          media="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
          srcSet={`${MobImage1x} 1x, ${MobImage2x} 2x`}
          type="image/png"
          width={335}
          height={402}
        />
        <img
          src={MobImage1x}
          alt="Girl with dog"
          className="registration-img"
        />
      </picture>
    </div>
  );
};

export default HomePage;
