import React, { useEffect } from "react";
import { useModal } from "@/store/ModalProvider";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Reservations } from "@/types/Reservation";
import { deleteReservation } from "@/api/api";

export function CancelModal() {
  const { activeModal, closeModal, reservationId } = useModal();

  const handleCancelReservation = async () => {
    try {
      if (reservationId != null) {
        await deleteReservation(reservationId);
      }
      closeModal();
    } catch (error) {
      console.log("예약 취소는 예약 신청 상태에서만 가능합니다.", error);
    }
  };

  useEffect(() => {
    if (activeModal === "cancel") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeModal]);

  if (activeModal !== "cancel") return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="flex w-[250px] flex-col items-center rounded-lg bg-white p-[24px]">
        <FaCheckCircle className="h-[24px] w-[24px]" />
        <p className="pt-[16px]">예약을 취소하시겠어요?</p>
        <div className="flex gap-[8px] pt-[32px]">
          <button
            onClick={closeModal}
            className="h-[40px] w-[80px] rounded-lg border-2 border-nomad_black"
          >
            아니요
          </button>
          <button
            onClick={handleCancelReservation}
            className="h-[40px] w-[80px] rounded-lg bg-nomad_black text-white"
          >
            취소하기
          </button>
        </div>
      </div>
    </div>
  );
}

export function ReviewModal() {
  const { activeModal, closeModal } = useModal();

  if (activeModal !== "review") return null;

  return (
    <div>
      <h1>후기 작성</h1>
      <IoMdClose />

      <button onClick={closeModal}>닫기</button>
    </div>
  );
}
