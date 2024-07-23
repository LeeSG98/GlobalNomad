import React, { ReactNode } from "react";
import MainBanner from "./MainBanner";

type LayoutProps = {
  children: ReactNode;
  isSticky?: boolean;
  footerRef?: React.RefObject<HTMLElement>;
};

const Layout = ({ children, isSticky = true, footerRef }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <MainBanner />
      <div className="mx-auto w-full max-w-7xl flex-grow px-4 sm:px-6 lg:px-8">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
