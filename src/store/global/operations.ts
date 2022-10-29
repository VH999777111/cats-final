import { fetch } from "../../services";

import {
  setCats,
  setIsLoading,
  applyMoreData,
  setCategories,
} from "./globalSlice";

import { AppDispatch } from "../configureStore";
import { ICategoryData } from "../../@types";

const getCatsDataByCategory = (categoryId: string, limit: number = 10) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true));
    try {
      const { data } = await fetch({
        endPoint: `/images/search?category_ids=${categoryId}&limit=10`,
        method: "GET",
      });

      dispatch(setCats(data));
    } catch (err) {
      // handle error
      dispatch(setIsLoading(false));
    }
  };
};

const getMoreDataByCategory = (categoryId: string, page: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const { data } = await fetch({
        endPoint: `/images/search?category_ids=${categoryId}&limit=10&page=${page}`,
        method: "GET",
      });

      dispatch(applyMoreData(data));
    } catch (err) {
      // handle error
    }
  };
};

const getAllCategories = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const { data } = await fetch({
        endPoint: "/categories",
        method: "GET",
      });

      const adaptedCategories = data.reduce(
        (a: { [key: string]: number }, b: ICategoryData) => {
          a[b.name] = b.id;
          return a;
        },
        {}
      );

      dispatch(setCategories(adaptedCategories));
    } catch (err) {
      // handle error
    }
  };
};

export default {
  getCatsDataByCategory,
  getMoreDataByCategory,
  getAllCategories,
};
