import React, { useContext } from "react";
import context from "./Context";

const Parent2 = () => {
  const theme = useContext(context);
  return <div className={theme ? "light" : "dark"}>
    <p>Parent2</p>
    <p>In a typical Redux app, there is just a single store with a single root reducing function. As your app grows, you split the root reducer into smaller reducers independently operating on the different parts of the state tree. This is exactly like how there is just one root component in a React app, but it is composed out of many small components.</p>
  </div>;
};
export default Parent2;