import { useEffect, useState } from "react";

interface Activity {
  bannerImageUrl: string;
  title: string;
  id: number;
}

interface Reservation {
  id: number;
  userId: number;
  activity: Activity;
  scheduleId: number;
  status: string;
  reviewSubmitted: boolean;
  totalPrice: number;
  headCount: number;
  date: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
}

interface ReservationProps {
  filter: string;
  reservations: Reservation[];
}

export default function Booking({ filter, reservations }: ReservationProps) {
  const [filteredReservations, setFilteredReservations] =
    useState<Reservation[]>(reservations);

  useEffect(() => {
    if (filter === "all") {
      setFilteredReservations(reservations);
    } else {
      setFilteredReservations(
        reservations.filter((reservation) => reservation.status === filter),
      );
    }
  }, [filter, reservations]);

  return (
    <div className="flex w-full flex-col gap-[24px]">
      {filteredReservations.map((reservation) => (
        <div
          key={reservation.id}
          className="flex overflow-hidden rounded-lg border shadow-md"
        >
          <div className="h-52 w-52">
            <img
              src={reservation.activity.bannerImageUrl}
              alt="이미지"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex w-full flex-col bg-white p-4">
            <div>
              <h3 className="pb-[8px] pt-[10px] text-lg font-extrabold">
                {(() => {
                  switch (reservation.status) {
                    case "pending":
                      return "예약 신청";
                    case "canceled":
                      return "예약 취소";
                    case "confirmed":
                      return "예약 승인";
                    case "declined":
                      return "예약 거절";
                    case "completed":
                      return "체험 완료";
                  }
                })()}
              </h3>
              <p className="pb-[13px] font-semibold text-black">
                {reservation.activity.title}
              </p>
              <p className="pb-[20px] text-gray-500">{`${reservation.date} · ${reservation.startTime} - ${reservation.endTime} · ${reservation.headCount}명`}</p>
            </div>
            <div>
              <p className="text-lg font-semibold">₩{reservation.totalPrice}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
