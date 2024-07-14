import HeaderProfile from "./headerProfile";

const Header = () => (
  <div className="flex items-center justify-around py-[19px] md:justify-between md:px-[24px]">
    <img src="image/header_logo.svg" alt="header_logo_icon" />
    <div className="flex gap-[25px] sm:gap-[12px]">
      <img src="image/notification_icon.svg" alt="notification_icon" />
      <img src="image/header_bar.svg" alt="header_bar_icon" />
      <HeaderProfile />
    </div>
  </div>
);

export default Header;
