import { useEffect, useState } from "react";
import { ReviewModal, CancelModal } from "../common/modal";
import CancelButton from "./CancelButton";
import ReviewButton from "./ReviewButton";
import { Reservations } from "@/types/Reservation";
import { useModal } from "@/store/ModalContext";
import priceToWon from "@/utils/priceToWon";

interface ReservationProps {
  filter: string;
  reservations: Reservations[];
}

export default function Booking({ filter, reservations }: ReservationProps) {
  const [filteredReservations, setFilteredReservations] =
    useState<Reservations[]>(reservations);
  const [currentReservation, setCurrentReservation] =
    useState<Reservations | null>(null);
  const { openModal, closeModal, isModalOpen, modalType } = useModal();

  useEffect(() => {
    let newestReservations = reservations;

    if (filter !== "all") {
      newestReservations = reservations.filter(
        (reservation) => reservation.status === filter,
      );
    }

    newestReservations.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

    setFilteredReservations(newestReservations);
  }, [filter, reservations]);

  useEffect(() => {
    const updatedReservations = reservations.map((reservation) => {
      if (reservation.status === "confirmed") {
        const endTimme = new Date(`${reservation.date}T${reservation.endTime}`);
        const now = new Date();

        if (endTimme < now) {
          return { ...reservation, status: "completed" };
        }
      }
      return reservation;
    });
    setFilteredReservations(updatedReservations);
  }, [reservations]);

  const statusColors: { [key: string]: string } = {
    completed: "#79747E",
    declined: "#FF472E",
    confirmed: "#FF7C1D",
    pending: "#2EB4FF",
    canceled: "#79747E",
  };

  const getStatusColor = (status: string) => statusColors[status] || "black";

  const handleOpenModal = (type: string, reservation: Reservations) => {
    setCurrentReservation(reservation);
    openModal(type);
  };

  // const [selectedReservation, setSelectedReservastion] =  useState

  // const handleOpenCancelModal = (id:string) => {
  //   openModal(<ReservationaCancelModal reservationId={id}/>)
  // }

  // return (
  //   <>
  //     {[].map(item => {
  //       return <div onClick={() => handleOpenCancelModal(reservationId)}}>
  //         {item}
  //       </div>
  //     })}

  //     // 모달 ui
  //     // <ReservationaCancelModal />
  //   </>
  // )

  return (
    <div className="flex w-full flex-col gap-[24px]">
      {isModalOpen && modalType === "review" && currentReservation && (
        <ReviewModal reservation={currentReservation} closeModal={closeModal} />
      )}
      {isModalOpen && modalType === "cancel" && currentReservation && (
        <CancelModal reservation={currentReservation} closeModal={closeModal} />
      )}
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
              <h3
                className="pb-[8px] pt-[10px] text-lg font-extrabold"
                style={{ color: getStatusColor(reservation.status) }}
              >
                {(() => {
                  switch (reservation.status) {
                    case "pending":
                      return "예약 완료";
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
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold">
                {priceToWon(reservation.totalPrice)}
              </p>
              {reservation.status === "pending" && (
                <CancelButton
                  onClick={() => handleOpenModal("cancel", reservation)}
                />
              )}

              {reservation.status === "completed" && (
                <ReviewButton
                  onClick={() => handleOpenModal("review", reservation)}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
