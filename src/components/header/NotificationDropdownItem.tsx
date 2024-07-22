interface NotificationDropdownItemProps {
  content: string;
}

const NotificationDropdownItem = ({
  content,
}: NotificationDropdownItemProps) => {
  const reservationStatus = content.slice(
    content.length - 8,
    content.length - 6,
  );
  return (
    <div className="w-90 flex flex-col gap-1 rounded-md bg-white p-2">
      <div className="flex justify-between">
        <img
          src={`/assets/circle_${reservationStatus === "승인" ? "blue" : "red"}.svg`}
          alt="Confirmed Chip"
        />
        <img
          className="w-5 cursor-pointer opacity-50"
          src="/assets/x_btn.svg"
          alt="Remove Notification Button"
        />
      </div>
      <div>
        {content.split(reservationStatus)[0]}
        <div
          style={{
            color: reservationStatus === "승인" ? "#0085FF" : "#FF472E",
            display: "inline",
          }}
        >
          {reservationStatus}
        </div>
        {content.split(reservationStatus)[1]}
      </div>
      <div className="text-sm opacity-50">1분 전</div>
    </div>
  );
};

export default NotificationDropdownItem;
