import { useState } from "react";
import context from "./Component/Context";
import MyContext from "./Component/MyContext";
import Navbar from "./Component/Navbar";
import Parent1 from "./Component/Parent1";
import Parent2 from "./Component/Parent2";
import "./App.css";

//const FirstName = createContext();

const App = () => {
  const [theme, setTheme] = useState(true);

  return (
    <context.Provider value={theme}>
      <button onClick={() => setTheme(!theme)}>Change Theme</button>
      <Navbar />
      <Parent1 />
      <Parent2 />
    </context.Provider>
  );
};
export default App;
