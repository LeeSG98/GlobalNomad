import { useState } from "react";
import ReactModal from "react-modal";

export default function ReviewButton() {
  const openModal = () => {};

  return (
    <>
      <button className="w-[144px] rounded-xl bg-nomad_black px-[12px] py-[10px] text-white">
        후기 작성
      </button>
      <ReactModal isOpen={false}>modal test</ReactModal>
    </>
  );
}
