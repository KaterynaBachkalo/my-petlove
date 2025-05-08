import DeskImage1x from "../img/home_page/desk/image@1x.png";
import DeskImage2x from "../img/home_page/desk/image@2x.png";
import TabImage1x from "../img/home_page/tab/image@2x.png";
import TabImage2x from "../img/home_page/tab/image@2x.png";
import MobImage1x from "../img/home_page/mob/image@2x.png";
import MobImage2x from "../img/home_page/mob/image@2x.png";
import Picture from "../components/Picture";
import { useTheme } from "../utils/useTheme";

const HomePage = () => {
  const { theme } = useTheme();

  return (
    <div className="home-wrap">
      <div className={`home-back  ${theme === "light" ? "" : "dark"}`}>
        <h2 className="home-title">
          Take good <span className="home-span">care</span> of your small pets
        </h2>
        <p className="home-text">
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </p>
      </div>
      <Picture
        mob1x={MobImage1x}
        mob2x={MobImage2x}
        tab1x={TabImage1x}
        tab2x={TabImage2x}
        desk1x={DeskImage1x}
        desk2x={DeskImage2x}
        alt="Girl with dog"
        className="registration-img"
      />
    </div>
  );
};

export default HomePage;
