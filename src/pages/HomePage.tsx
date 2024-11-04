import { Link } from "react-router-dom";
import Icon from "../components/Icon";

const HomePage = () => {
  return (
    <Link to="/register">
      <div className="background-image">
        <p className="home-logo">
          petl
          <Icon
            className="home-icon"
            name="icon-heart-circle"
            width={44}
            height={44}
          />
          ve
        </p>
      </div>
    </Link>
  );
};

export default HomePage;
