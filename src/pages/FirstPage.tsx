import { Link, useNavigate } from "react-router-dom";
import Icon from "../components/Icon";
import ProgressBar from "../components/ProgressBar";
import { useState } from "react";

const FirstPage = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setLoading(true);
  };

  const handleProgressComplete = () => {
    setLoading(false);
    navigate("/home"); // Перехід на сторінку home.
  };

  return (
    <>
      {loading && <ProgressBar onComplete={handleProgressComplete} />}

      <Link to="/home" className="first-link" onClick={handleClick}>
        <div className="background-image">
          {!loading && (
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
          )}
        </div>
      </Link>
    </>
  );
};

export default FirstPage;
