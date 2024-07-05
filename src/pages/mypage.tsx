import List from "@/components/mypage/List";
import Profile from "@/components/common/profile/Profile";

export default function mypage() {
  return (
    <>
      <div className="flex justify-center gap-6 bg-gray_FA pt-[72px]">
        <Profile />
        <div>
          <div className="flex w-[792px] flex-col gap-[24px]">
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold">내 정보</h1>
              <button className="h-[48px] w-[120px] rounded bg-nomad_black px-4 py-2 text-white">
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
