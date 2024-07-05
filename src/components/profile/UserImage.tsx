import Image from "next/image";
import User from "@/public/images/UserImage.jpg";
import { HiOutlinePencil } from "react-icons/hi2";

export default function UserImage() {
  return (
    <div className="relative">
      <Image
        src={User}
        alt="유저이미지"
        className="rounded-full w-[160px] h-[160px] shadow"
      />
      {/* 버튼을 누르면 이미지 등록할 수 있는 기능 미구현 */}
      <button className="flex justify-center items-center bg-gren_0B w-[44px] h-[44px] rounded-full absolute bottom-0 right-2 ">
        <HiOutlinePencil className="text-white" />
      </button>
    </div>
  );
}
