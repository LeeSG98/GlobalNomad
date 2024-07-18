import Link from "next/link";
import { useRouter } from "next/router";
import PageMenu from "../common/profile/PageMenu";

const ProfileDropdown = () => {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    router.push("/signin");
  };

  return (
    <div className="absolute right-0 top-12 z-20 flex w-56 flex-col gap-3 rounded-md border-2 bg-white p-3 shadow-md">
      <PageMenu
        linkTo="/mypage"
        icon="/image/my_Info_icon.svg"
        activeIcon="/image/my_Info_icon.svg"
        name="내 정보"
      />
      <PageMenu
        linkTo="/"
        icon="/image/reservation_details_icon.svg"
        activeIcon="/image/reservation_details_icon.svg"
        name="예약 내역"
      />
      <PageMenu
        linkTo="/"
        icon="/image/management_icon.svg"
        activeIcon="/image/management_icon.svg"
        name="내 체험 관리"
      />
      <PageMenu
        linkTo="/"
        icon="/image/reservation_status_icon.svg"
        activeIcon="/image/reservation_status_icon.svg"
        name="예약 현황"
      />
      <div
        className="rounded-xl bg-green_0B p-3 text-center font-semibold text-white hover:bg-green_CE hover:text-green_0B"
        onClick={logout}
      >
        로그아웃
      </div>
    </div>
  );
};

export default ProfileDropdown;
