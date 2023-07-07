import React, { useContext } from "react";
import context from "./Context";

const Navbar = () => {
  const theme = useContext(context);
  return <div className={theme ? "light" : "dark"}>Navbar</div>;
};
export default Navbar;