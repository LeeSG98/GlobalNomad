import Link from "next/link";
import { useRouter } from "next/router";
import HeaderProfile from "./headerProfile";

const Header = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-around py-[19px] md:justify-between md:px-[24px]">
      <img src="/image/header_logo.svg" alt="logo_small_icon" />
      {router.pathname === "/" ? (
        <div className="flex gap-[25px] text-[14px] font-medium text-[#1B1B1B]">
          <Link href="/login">로그인</Link>
          <Link href="/signup">회원가입</Link>
        </div>
      ) : (
        <div className="flex gap-[25px] sm:gap-[12px]">
          <img src="/image/notification_icon.svg" alt="notification_icon" />
          <img src="/image/header_bar.svg" alt="header_bar_icon" />
          <HeaderProfile />
        </div>
      )}
    </div>
  );
};

export default Header;
