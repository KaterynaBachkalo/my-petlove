import { Link, useNavigate } from "react-router-dom";
import Icon from "../components/ComponentsForDesign/Icon";
import ProgressBar from "../components/ComponentsForDesign/ProgressBar";
import { useEffect, useState } from "react";

const FirstPage = () => {
  const [loading, setLoading] = useState(false);
  const [progressComplete, setProgressComplete] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setLoading(true);
  };

  const handleProgressComplete = () => {
    setProgressComplete(true);
  };

  useEffect(() => {
    if (progressComplete) navigate("/home");
  }, [navigate, progressComplete]);

  return (
    <section>
      {loading && <ProgressBar onComplete={handleProgressComplete} />}

      {!loading && (
        <Link to="/home" className="first-link" onClick={handleClick}>
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
      )}
    </section>
  );
};

export default FirstPage;
