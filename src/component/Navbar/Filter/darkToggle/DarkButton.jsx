import React, { useState } from "react";

import dark from "../../../../assets/dark.png";
import light from "../../../../assets/light.png";
const DarkButton = ({ props }) => {
  const [isDark, setIsDark] = useState(true);

  const handleToggleDark = () => {
    return document.getElementsByTagName("body")[0].classList.toggle("dark");
  };
  return (
    <li className="w-7 md:w-10 hover:bg-slate-100 bo rounded cursor-pointer">
      <img
        className="p-1"
        onClick={() => {
          setIsDark(!isDark);
          handleToggleDark();
        }}
        src={isDark ? light : dark}
        alt="Dark"
      />
    </li>
  );
};

export default DarkButton;
