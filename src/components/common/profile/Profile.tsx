import List from "./List";
import { TbUserCheck } from "react-icons/tb";
import { MdPlaylistAddCheck } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { FaRegCalendarCheck } from "react-icons/fa6";
import UserImage from "./UserImage";
import Link from "next/link";

function Profile() {
  return (
    <>
      <div className="flex h-full w-[384px] flex-col gap-[24px] rounded-xl border p-[24px] shadow">
        <div className="flex justify-center">
          <UserImage />
        </div>
        <div className="flex flex-col gap-[8px]">
          <Link href="/mypage">
            <List icon={<TbUserCheck />} title="내 정보" />
          </Link>
          <Link href="/mybookinglist">
            <List icon={<MdPlaylistAddCheck />} title="예약내역" />
          </Link>
          <Link href="/myactivitypage">
            <List icon={<CiSettings />} title="내 체험 관리" />
          </Link>
          <Link href="/bookingstatus">
            <List icon={<FaRegCalendarCheck />} title="예약 현황" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Profile;
