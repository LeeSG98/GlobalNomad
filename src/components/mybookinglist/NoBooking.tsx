import { CiFileOff } from "react-icons/ci";

export default function NoBooking() {
  return (
    <div className="text-gray_79">
      <CiFileOff className="h-[200px] w-[150px]" />
      <h2>아직 등록한 체험이 없어요</h2>
    </div>
  );
}
