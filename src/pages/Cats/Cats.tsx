import React, { useEffect, useRef } from "react";

import { useAppDispatch, useAppSelector } from "../../utils/hooks/redux";
import { globalOp } from "../../store/global";

import { getCurrentModeStyle } from "../../utils/generate.classnames.helper";

import CatCard from "../../components/CatCard/CatCard";

import { useParams } from "react-router-dom";

import "./Cats.scss";

const Cats = () => {
  const { category } = useParams();

  const categories = useAppSelector(({ global }) => global.categories);
  const isLoading = useAppSelector(({ global }) => global.isLoading);
  const catsData = useAppSelector(({ global }) => global.cats);

  const isDarkMode = useAppSelector(({ global }) => global.isDarkMode);
  const currentCategoryId = categories && categories[category || "boxes"];

  const currentPage = useRef(1);

  const dispatch = useAppDispatch();

  useEffect(() => {
    currentPage.current = 1;
    dispatch(globalOp.getCatsDataByCategory(String(currentCategoryId)));
  }, [category, dispatch, currentCategoryId]);

  const handleMoreButtonClick = () => {
    currentPage.current += 1;
    dispatch(
      globalOp.getMoreDataByCategory(
        String(currentCategoryId),
        currentPage.current
      )
    );
  };

  return (
    <div className={getCurrentModeStyle(isDarkMode, "cats-page")}>
      <div className="content">
        {isLoading ? (
          <h3>LOADING...</h3>
        ) : (
          catsData?.map((cat, index) => {
            return <CatCard key={index} imgSrc={cat.url} />;
          })
        )}
      </div>
      <div onClick={handleMoreButtonClick} className="load-more-button">
        <span>LOAD MORE</span>
      </div>
    </div>
  );
};

export default Cats;
