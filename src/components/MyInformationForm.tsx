import React from "react";

interface IUserProps {
  userData: {
    name: string | null;
    email: string | null;
    phone: number | null;
  };
}

const MyInformationForm: React.FC<IUserProps> = ({ userData }) => {
  const { name, email, phone } = userData;
  return (
    <>
      <h2 className="profile-title">My information</h2>

      <form className="wrap-input profile">
        <input
          type="text"
          value={name ?? "NONAME"}
          className="input"
          readOnly
        />
        <input
          type="email"
          value={email ?? "email"}
          className="input"
          readOnly
        />
        <input type="tel" value={phone ?? "+380"} className="input" readOnly />
      </form>
    </>
  );
};

export default MyInformationForm;
