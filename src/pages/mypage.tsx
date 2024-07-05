import List from "@/components/mypage/List";
import Profile from "@/components/profile/Profile";

export default function mypage() {
  return (
    <>
      <div className="flex justify-center gap-6 pt-[72px] bg-gray_FA">
        <Profile />
        <div>
          <div className="flex flex-col w-[792px] gap-[24px]">
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold ">내 정보</h1>
              <button className="px-4 py-2 bg-nomad_black text-white rounded w-[120px] h-[48px]">
                저장하기
              </button>
            </div>
            <List />
          </div>
        </div>
      </div>
    </>
  );
}
