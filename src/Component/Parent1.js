import React, { useContext } from "react";
import context from "./Context";

const Parent1 = () => {
  const theme = useContext(context);
  return <div className={theme ? "light" : "dark"}>Parent1</div>;
};
export default Parent1;