import React, { useEffect, useState } from "react";

import dark from "../../../../assets/dark.png";
import light from "../../../../assets/light.png";
const DarkButton = () => {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];

    if (isDark) {
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <li className="w-7 md:w-10 hover:bg-slate-100 bo rounded cursor-pointer">
      <img
        className="p-1"
        onClick={() => {
          setIsDark(!isDark);
        }}
        src={isDark ? light : dark}
        alt="Dark"
      />
    </li>
  );
};

export default DarkButton;
