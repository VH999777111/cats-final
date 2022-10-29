import { createSlice } from "@reduxjs/toolkit";

import { getStorageItem, setStorageItem } from "../../services";

import { ICatData } from "../../@types";

interface IGlobal {
  isDarkMode: boolean;
  cats: ICatData[] | null;
  isLoading: boolean;
  categories: { [key: string]: number } | null;
}

const initialState: IGlobal = {
  isDarkMode: getStorageItem("isDarkMode"),
  cats: null,
  isLoading: true,
  categories: null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setCats: (state, action) => {
      state.cats = action.payload;
      state.isLoading = false;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    applyMoreData: (state, action) => {
      const currentData = state.cats || [];
      state.cats = [...currentData, ...action.payload];
    },
    switchDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      setStorageItem("isDarkMode", state.isDarkMode);
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const {
  setCats,
  setIsLoading,
  applyMoreData,
  switchDarkMode,
  setCategories,
} = globalSlice.actions;
