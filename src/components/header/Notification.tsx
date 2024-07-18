import useClickOutside from "@/hooks/useOutsideClick";
import { useRef, useState } from "react";
import NotificationDropdown from "./NotifacationDropdown";

const Notification = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownIsOpen((prev) => !prev);
  };

  useClickOutside(dropdownRef, () => setDropdownIsOpen(false));

  return (
    <div ref={dropdownRef}>
      <img
        className="cursor-pointer"
        src="/image/notification_icon.svg"
        alt="notification_icon"
        onClick={toggleDropdown}
      />
      {dropdownIsOpen && <NotificationDropdown />}
    </div>
  );
};

export default Notification;
