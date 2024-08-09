import React, { ReactNode } from "react";

type MainLayoutProps = {
  searchBar: ReactNode;
  mainToolBar: ReactNode;
  cardList: ReactNode;
};

const MainLayout = ({ searchBar, mainToolBar, cardList }: MainLayoutProps) => {
  return (
    <div className="p-4">
      <div className="mb-4">{searchBar}</div>
      <div className="mb-4">{mainToolBar}</div>
      <div>{cardList}</div>
    </div>
  );
};

export default MainLayout;
