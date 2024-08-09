import React, { useEffect, useState } from "react";
import { useModal } from "@/store/ModalContext";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { createReservationReview, deleteReservation } from "@/api/api";
import { Reservations } from "@/types/Reservation";
import priceToWon from "@/utils/priceToWon";

interface ModalProps {
  reservation: Reservations;
  closeModal: () => void;
}

export function CancelModal({ reservation, closeModal }: ModalProps) {
  const handleCancelReservation = async () => {
    try {
      if (reservation.id != null) {
        await deleteReservation(reservation.id);
      }
      closeModal();
    } catch (error) {
      console.log("예약 취소는 예약 신청 상태에서만 가능합니다.", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
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

export function ReviewModal({ reservation, closeModal }: ModalProps) {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");

  const handleSubmitReview = async () => {
    try {
      await createReservationReview(reservation.id, rating, content);
      closeModal();
    } catch (e) {
      console.log("content는 문자열로 입력해주세요.", e);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
      <div className="flex flex-col rounded-lg bg-white p-[24px]">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">후기 작성</h1>
          <IoMdClose
            onClick={closeModal}
            className="text-3xl hover:cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-[24px]">
          <div className="flex gap-[24px] pt-[40px]">
            <img
              src={reservation.activity.bannerImageUrl}
              alt={reservation.activity.title}
              className="h-[126px] w-[126px] rounded-xl"
            ></img>

            <div className="flex flex-col gap-[12px]">
              <p className="text-xl font-bold">{reservation.activity.title}</p>
              <div className="flex gap-[6px]">
                <p className="text-lg">
                  {reservation.date} · {reservation.startTime} -{" "}
                  {reservation.endTime}
                </p>
                <p className="text-lg">· {reservation.headCount}명</p>
              </div>
              <div className="border-lightGray/30 border-[1px]"></div>
              <p className="text-xl font-bold">
                {priceToWon(reservation.totalPrice)}
              </p>
            </div>
          </div>
          <div className="flex gap-[2px]">
            {[...Array(rating)].map((a, i) => (
              <FaStar
                className="h-[56px] w-[56px]"
                color="#FFC23D"
                key={i}
                onClick={() => setRating(i + 1)}
              />
            ))}
            {[...Array(5 - rating)].map((a, i) => (
              <FaRegStar
                className="h-[56px] w-[56px]"
                key={i}
                onClick={() => setRating(rating + i + 1)}
              />
            ))}
          </div>
          <textarea
            placeholder="후기를 작성해주세요"
            className="h-[250px] resize-none rounded-md border-2 p-[16px]"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>

          <button
            onClick={handleSubmitReview}
            className="h-[55px] rounded-lg bg-nomad_black py-[8px] text-white"
          >
            작성하기
          </button>
        </div>
      </div>
    </div>
  );
}
