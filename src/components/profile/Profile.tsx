import List from "./List";
import { TbUserCheck } from "react-icons/tb";
import { MdPlaylistAddCheck } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { FaRegCalendarCheck } from "react-icons/fa6";
import UserImage from "./UserImage";

function Profile() {
  return (
    <>
      <div className="flex flex-col w-[384px] h-full p-[24px] border rounded-xl gap-[24px] shadow">
        <div className="flex justify-center">
          <UserImage />
        </div>
        {/* 클릭한 리스트에 맞는 화면 보여주는 기능 미구현 */}
        <div className="flex flex-col gap-[8px]">
          <List icon={<TbUserCheck />} title="내 정보" />
          <List icon={<MdPlaylistAddCheck />} title="예약내역" />
          <List icon={<CiSettings />} title="내 체험 관리" />
          <List icon={<FaRegCalendarCheck />} title="예약 현황" />
        </div>
      </div>
    </>
  );
}

export default Profile;
