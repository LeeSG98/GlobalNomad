import React from "react";
import { useModal } from "@/store/ModalProvider";

export function CancelModal() {
  const { activeModal, closeModal } = useModal();

  if (activeModal !== "cancel") return null;

  return (
    <div className="modal">
      <p>예약을 취소하시겠어요?</p>
      <button onClick={closeModal}>아니요</button>
      <button onClick={closeModal}>취소하기</button>
    </div>
  );
}

export function ReviewModal() {
  const { activeModal, closeModal } = useModal();

  if (activeModal !== "review") return null;

  return (
    <div className="modal">
      <p>후기를 작성해주세요</p>
      <button onClick={closeModal}>닫기</button>
    </div>
  );
}
