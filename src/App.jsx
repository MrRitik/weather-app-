import React, { useState } from "react";
import "./App.css";
import Temp from "./components/temp/Temp";
import DarkMode from "./components/darkmode/DarkMode";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <div className="App" data-theme={isDark ? "dark" : "light"}>
        <DarkMode isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
        <Temp />
      </div>
    </>
  );
};

export default App;
