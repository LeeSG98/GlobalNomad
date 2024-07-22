import { useInfiniteQuery } from "@tanstack/react-query";
import NotificationDropdownItem from "./NotificationDropdownItem";
import getMyNotification from "@/api/getMyNotification";

interface Notifications {
  id: number;
  teamId: string;
  userId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

interface NotificationDataType {
  totalCount: number;
  notifications: Notifications[];
  cursorId: number;
}

const NotificationDropdown = () => {
  const { data } = useInfiniteQuery<NotificationDataType>({
    queryKey: ["notifications"],
    queryFn: getMyNotification,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.cursorId,
  });
  const totalCount = data?.pages[0]?.totalCount || 0;
  const notifications = data?.pages.flatMap((page) => page.notifications) || [];

  console.log(data);
  return (
    <div className="bg-green-10 border-1 absolute right-12 top-12 z-20 flex h-[300px] w-[368px] flex-col gap-3 overflow-y-auto rounded-md px-4 py-6 shadow-md">
      <div className="flex w-full justify-between">
        <div className="text-xl font-bold">알림 {totalCount}개</div>
        <img
          className="w-5 cursor-pointer"
          src="/image/x_btn.svg"
          alt="Close Box Button"
        />
      </div>
      {notifications.map((item) => {
        return (
          <NotificationDropdownItem
            key={item.id}
            content={item.content}
            updatedAt={item.updatedAt}
          />
        );
      })}
    </div>
  );
};

export default NotificationDropdown;
