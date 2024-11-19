import { useDispatch, useSelector } from "react-redux";
import { selectFriends } from "../redux/pet/selectors";
import { AppDispatch } from "../redux/store";
import { useEffect } from "react";
import { fetchFriends } from "../redux/pet/operations";
import { Link } from "react-router-dom";

const FriendsPage = () => {
  const friends = useSelector(selectFriends);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <div className="news-container">
      <div className="news-main-wrap">
        <h2 className="news-main-title friends-main-title">Our friends</h2>
      </div>
      <div className="friends-cards">
        {friends && friends.length > 0 ? (
          friends.map(
            ({
              imageUrl,
              title,
              url,
              addressUrl,
              address,
              workDays,
              phone,
              email,
            }) => {
              const todayIndex = (new Date().getDay() + 6) % 7;
              const todaySchedule =
                workDays?.length > 0 ? workDays[todayIndex] : "";
              const workingHours =
                todaySchedule &&
                typeof todaySchedule === "object" &&
                "isOpen" in todaySchedule
                  ? todaySchedule.isOpen
                    ? `${todaySchedule.from} - ${todaySchedule.to}`
                    : "Closed"
                  : "Closed";

              return (
                <div key={url} className="friends-card">
                  <div className="working-hours-wrap">
                    <p className="working-hours">{workingHours}</p>
                  </div>
                  <div className="friends-card-wrap">
                    <img src={imageUrl} alt={title} className="friends-img" />
                    <div className="friends-text-wrap">
                      <h3 className="friends-title">{title}</h3>
                      <Link to={`mailto:${email}`}>
                        <p className="friends-text">
                          Email: <span className="friends-span">{email}</span>
                        </p>
                      </Link>
                      <Link to={addressUrl ? addressUrl : url} target="blank">
                        <p className="friends-text">
                          Address:{" "}
                          <span className="friends-span">
                            {address ? address : "website only"}
                          </span>
                        </p>
                      </Link>
                      <Link to={`tel:${phone}`}>
                        <p className="friends-text">
                          Phone:{" "}
                          <span className="friends-span">
                            {phone ? phone : "email only"}
                          </span>
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
          )
        ) : (
          <p>There are friends yet</p>
        )}
      </div>
    </div>
  );
};

export default FriendsPage;
