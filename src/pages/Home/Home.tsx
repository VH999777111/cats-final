import React from "react";

import { getCurrentModeStyle } from "../../utils/generate.classnames.helper";

import { useAppSelector } from "../../utils/hooks/redux";

import "./Home.scss";

const Home = () => {
  const isDarkMode = useAppSelector(({ global }) => global.isDarkMode);

  return (
    <div className={getCurrentModeStyle(isDarkMode, "home-page")}>
      <div className="content">
        <h3>CLICK ON CATEGORY TO SEE CATS</h3>
      </div>
    </div>
  );
};

export default Home;
