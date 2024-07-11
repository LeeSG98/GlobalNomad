import Image from "next/image";
// import User from "@/public/images/UserImage.jpg";
import User from "../../../../public/UserImage.jpg";
import { HiOutlinePencil } from "react-icons/hi2";

export default function UserImage() {
  return (
    <div className="relative">
      <img
        src="/image/UserImage.jpg"
        alt="유저이미지"
        className="h-[160px] w-[160px] rounded-full shadow"
      />
      {/* 버튼을 누르면 이미지 등록할 수 있는 기능 미구현 */}
      <button className="absolute bottom-0 right-2 flex h-[44px] w-[44px] items-center justify-center rounded-full bg-green_0B">
        <HiOutlinePencil className="text-white" />
      </button>
    </div>
  );
}
