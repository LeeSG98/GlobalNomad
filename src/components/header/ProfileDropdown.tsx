import { useRouter } from "next/router";
import PageMenu from "../common/profile/PageMenu";
import { useAuth } from "@/contexts/AuthContext";

const ProfileDropdown = () => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/signin");
  };

  return (
    <div className="border-1 absolute right-0 top-12 z-20 flex w-56 flex-col gap-3 rounded-md bg-white p-3 shadow-md">
      <PageMenu
        linkTo="/mypage"
        icon="/image/my_Info_icon.svg"
        activeIcon="/image/my_Info_icon.svg"
        name="내 정보"
      />
      <PageMenu
        linkTo="/mybookinglist"
        icon="/image/reservation_details_icon.svg"
        activeIcon="/image/reservation_details_icon.svg"
        name="예약 내역"
      />
      <PageMenu
        linkTo="MyActvitiyPage"
        icon="/image/management_icon.svg"
        activeIcon="/image/management_icon.svg"
        name="내 체험 관리"
      />
      <PageMenu
        linkTo="/bookingstatus"
        icon="/image/reservation_status_icon.svg"
        activeIcon="/image/reservation_status_icon.svg"
        name="예약 현황"
      />
      <div
        className="rounded-xl bg-green_0B p-3 text-center font-semibold text-white hover:bg-green_CE hover:text-green_0B"
        onClick={handleLogout}
      >
        로그아웃
      </div>
    </div>
  );
};

export default ProfileDropdown;
