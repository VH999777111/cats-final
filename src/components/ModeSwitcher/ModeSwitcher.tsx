import React from "react";

import { useAppDispatch, useAppSelector } from "../../utils/hooks/redux";

import { getCurrentModeStyle } from "../../utils/generate.classnames.helper";

import { switchDarkMode } from "../../store/global/globalSlice";

import "./ModeSwitcher.scss";

const ModeSwitcher = () => {
  const dispatch = useAppDispatch();

  const isDarkMode = useAppSelector(({ global }) => global.isDarkMode);

  const switchHandler = () => {
    dispatch(switchDarkMode());
  };

  return (
    <div
      onClick={switchHandler}
      className={getCurrentModeStyle(isDarkMode, "mode-switcher")}
    >
      <div className="switcher-circle"></div>
    </div>
  );
};

export default ModeSwitcher;
