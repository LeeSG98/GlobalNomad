import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation(); // Changed navigate to location
  console.log(location.pathname); // Use location instead of navigate

  return (
    <div
      className={`dark:bg-darkMode-black-10 pt-[104px] sm:px-[12px] sm:pt-[44px] md:px-[52px] md:pt-[72px] ${location.pathname === "/login" ? "h-screen" : "h-full"}`}
    >
      <img
        src="/image/logo.svg"
        alt="logo"
        className="ml-auto mr-auto sm:h-[154px] sm:w-[270px]"
      />
      {children}
    </div>
  );
};

export default AuthLayout;
