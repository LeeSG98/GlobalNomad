

import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import NotificationDropdownItem from "./NotificationDropdownItem";
import getMyNotification from "@/api/getMyNotification";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

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

const NotificationDropdown = ({
  setDropdownIsOpen,
}: {
  setDropdownIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const queryClient = useQueryClient();
  const { data, fetchNextPage } = useInfiniteQuery<NotificationDataType>({
    queryKey: ["notifications"],
    queryFn: getMyNotification,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.cursorId,
  });

  const [notifications, setNotifications] = useState<Notifications[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    if (data) {
      setNotifications(data.pages.flatMap((page) => page.notifications));
      setTotalCount(data.pages[0].totalCount);
    }
  }, [data]);

  const handleModalClose = () => {
    setDropdownIsOpen(false);
  };

  const handleDeleteNotification = (notificationId: number) => {
    setNotifications((prev) =>
      prev.filter((notif) => notif.id !== notificationId),
    );
    setTotalCount((prev) => prev - 1);
  };

  const { inView, ref } = useInView();
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <div className="border-1 absolute right-12 top-12 z-20 flex h-[300px] w-[368px] flex-col gap-3 overflow-y-auto rounded-md bg-green_CE px-4 py-6 shadow-md">
      {totalCount === 0 ? (
        <div>모든 알람을 확인했습니다!</div>
      ) : (
        <>
          <div className="flex w-full justify-between">
            <div className="text-xl font-bold">알림 {totalCount}개</div>
            <button type="button" onClick={handleModalClose}>
              <img
                className="w-5 cursor-pointer"
                src="/image/x_btn.svg"
                alt="Close Box Button"
              />
            </button>
          </div>
          {notifications.map((item) => (
            <NotificationDropdownItem
              key={item.id}
              content={item.content}
              updatedAt={item.updatedAt}
              notificationId={item.id}
              onDelete={handleDeleteNotification}
            />
          ))}
          <div ref={ref} className="h-[5px] w-[5px]" />
        </>
      )}
    </div>
  );
};

export default NotificationDropdown;
