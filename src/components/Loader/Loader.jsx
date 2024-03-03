import { Circles } from "react-loader-spinner";

export default function Loader() {
  const loaderStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };
  return (
    <Circles
      height="80"
      width="80"
      color="red"
      ariaLabel="circles-loading"
      wrapperStyle={loaderStyle}
      wrapperClass=""
      visible={true}
    />
  );
}
