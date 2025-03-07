import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/auth/selectors";

const MyInformationForm = () => {
  const currentUser = useSelector(selectCurrentUser);

  const { name, email, phone } = currentUser;

  const formatPhoneNumber = (phoneNumber: number | null) => {
    const phoneStr = phoneNumber?.toString();
    if (phoneStr) {
      return phoneStr?.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4");
    }
  };

  const phoneNumber = formatPhoneNumber(phone);

  return (
    <>
      <h2 className="profile-title">My information</h2>

      <form className="wrap-input profile">
        <input
          type="text"
          value={!name ? "User name" : name}
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
          value={`+380 ${phoneNumber}`}
          className="input profile"
          readOnly
        />
      </form>
    </>
  );
};

export default MyInformationForm;
