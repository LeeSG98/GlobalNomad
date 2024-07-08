import Profile from "@/components/common/profile/Profile";

export default function mybookinglist() {
  return (
    <>
      <div className="flex justify-center gap-6 bg-gray_FA pt-[72px]">
        <Profile />
        <div className="flex w-[792px] flex-col gap-[24px]">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">예약 내역</h1>
          </div>
        </div>
      </div>
    </>
  );
}
