import React from "react";

import { getCurrentModeStyle } from "../../utils/generate.classnames.helper";

import { useAppSelector } from "../../utils/hooks/redux";

import { NavLink } from "react-router-dom";

import "./LeftSideBar.scss";

const LeftSideBar = () => {
  const isDarkMode = useAppSelector(({ global }) => global.isDarkMode);

  const categories = useAppSelector(({ global }) => global.categories);

  const currentCategories = Object.keys(categories || {});

  return (
    <div className={getCurrentModeStyle(isDarkMode, "left-sidebar-wrapper")}>
      <div className="categories-list">
        {currentCategories.map((category) => {
          return (
            <NavLink
              key={category}
              className="category"
              to={`/cats/${category}`}
            >
              {category}
            </NavLink>
          );
        })}

        <NavLink className="category home" end to="/">
          HOME
        </NavLink>
        <NavLink className="category" to="/about">
          ABOUT
        </NavLink>
      </div>
    </div>
  );
};

export default LeftSideBar;
