import { Vortex } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader-backdrop">
      <div className="loader-wrapper">
        <Vortex
          visible={true}
          height="150"
          width="150"
          ariaLabel="vortex-loading"
          wrapperStyle={{
            left: "50%",
            top: "50%",
            position: "absolute",
          }}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div>
    </div>
  );
};

export default Loader;
