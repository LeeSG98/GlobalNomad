export default function Booking() {
  return (
    <div className="flex w-full overflow-hidden rounded-lg border shadow-md">
      <div className="h-52 w-52"> 이미지</div>
      <div className="flex w-full flex-col bg-white p-4">
        <div>
          <h3 className="pb-[8px] pt-[10px] text-lg font-extrabold">
            예약 거절
          </h3>
          <p className="pb-[13px] font-semibold text-black">
            이색 앵무새 캐페에서 앵무새와 친구되기
          </p>
          <p className="pb-[20px] text-gray-500">
            2023. 2. 14 · 11:00 - 12:30 · 10명
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold">₩10,000</p>
        </div>
      </div>
    </div>
  );
}
