const NotificationDropdown = () => {
  return (
    <div className="border-1 absolute right-12 top-12 z-20 flex w-[368px] flex-col gap-3 rounded-md bg-green_CE px-4 py-6 shadow-md">
      <div className="flex w-full justify-between">
        <div className="text-xl font-bold">알림 0개</div>
        <img
          className="w-5 cursor-pointer"
          src="/image/x_btn.svg"
          alt="Close Box Button"
        />
      </div>
      <div className="w-90 flex flex-col gap-1 rounded-md bg-white p-2">
        <div className="flex justify-between">
          <img src="/image/circle_red.svg" alt="Confirmed Chip" />
          <img
            className="w-5 cursor-pointer opacity-50"
            src="/image/x_btn.svg"
            alt="Remove Notification Button"
          />
        </div>
        <div className="">
          함께하면 즐거운 스트릿 댄스(2024-07-19 15:00~18:00) 예약이
          승인되었어요.
        </div>
        <div className="text-sm opacity-50">50분 전</div>
      </div>
      <div className="w-90 flex flex-col gap-1 rounded-md bg-white p-2">
        <div className="flex justify-between">
          <img src="/image/circle_blue.svg" alt="Declined Chip" />
          <img
            className="w-5 cursor-pointer opacity-50"
            src="/image/x_btn.svg"
            alt="Remove Notification Button"
          />
        </div>
        <div className="">
          함께하면 즐거운 스트릿 댄스(2024-07-19 15:00~18:00) 예약이
          승인되었어요.
        </div>
        <div className="text-sm opacity-50">10분 전</div>
      </div>
    </div>
  );
};

export default NotificationDropdown;
