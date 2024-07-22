import useClickOutside from "@/hooks/useOutsideClick";
import { useRef, useState } from "react";
import NotificationDropdown from "./NotifacationDropdown";
import { useInfiniteQuery } from "@tanstack/react-query";
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

const Notification = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownIsOpen((prev) => !prev);
  };

  useClickOutside(dropdownRef, () => setDropdownIsOpen(false));
  const { data } = useInfiniteQuery<NotificationDataType>({
    queryKey: ["notifications"],
    queryFn: getMyNotification,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.cursorId,
  });

  const totalCount = data?.pages[0]?.totalCount || 0;
  const notifications = data?.pages.flatMap((page) => page.notifications) || [];

  return (
    <div ref={dropdownRef} className="relative">
      <img
        className="cursor-pointer"
        src="/image/notification_icon.svg"
        alt="notification_icon"
        onClick={toggleDropdown}
      />
      {totalCount !== 0 && (
        <div
          className="absolute right-0 top-1 h-[10px] w-[10px] cursor-pointer rounded-full bg-yellow"
          onClick={toggleDropdown}
        />
      )}

      {dropdownIsOpen && (
        <NotificationDropdown
          notifications={notifications}
          totalCount={totalCount}
        />
      )}
    </div>
  );
};

export default Notification;
