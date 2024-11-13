import { Link } from "react-router-dom";
import Icon from "../components/Icon";

const FirstPage = () => {
  return (
    <Link to="/register">
      <div className="background-image">
        <p className="first-logo">
          petl
          <Icon
            className="first-icon"
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

export default FirstPage;
