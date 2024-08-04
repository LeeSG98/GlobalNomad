import { useModal } from "@/store/ModalProvider";

export default function CancelButton() {
  const { openModal } = useModal();

  return (
    <>
      <button
        onClick={() => openModal("cancel")}
        className="w-[144px] rounded-xl border-2 border-nomad_black px-[12px] py-[8px] text-nomad_black"
      >
        예약 취소
      </button>
    </>
  );
}
