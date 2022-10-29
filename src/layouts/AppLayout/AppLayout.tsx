import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../utils/hooks/redux";
import { globalOp } from "../../store/global";

import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import ModeSwitcher from "../../components/ModeSwitcher/ModeSwitcher";

interface AppLayoutProps {
  children: JSX.Element;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const dispatch = useAppDispatch();

  const categories = useAppSelector(({ global }) => global.categories);

  useEffect(() => {
    dispatch(globalOp.getAllCategories());
  }, [dispatch]);

  return (
    categories && (
      <div className="app-layout">
        <LeftSideBar />
        <ModeSwitcher />
        {children}
      </div>
    )
  );
};

export default AppLayout;
