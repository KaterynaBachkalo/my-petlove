import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/auth/selectors";

const MyInformationForm = () => {
  const currentUser = useSelector(selectCurrentUser);

  const { name, email, phone } = currentUser;
  return (
    <>
      <h2 className="profile-title">My information</h2>

      <form className="wrap-input profile">
        <input
          type="text"
          value={name ?? "NONAME"}
          className="input profile"
          readOnly
        />
        <input
          type="email"
          value={email ?? "email"}
          className="input profile"
          readOnly
        />
        <input
          type="tel"
          value={phone ?? "+380"}
          className="input profile"
          readOnly
        />
      </form>
    </>
  );
};

export default MyInformationForm;
