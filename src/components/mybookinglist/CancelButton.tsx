import { useModal } from "@/store/ModalProvider";

interface CancleButtonProps {
  reservationId: number;
}

export default function CancelButton({ reservationId }: CancleButtonProps) {
  const { openModal } = useModal();

  return (
    <>
      <button
        onClick={() => openModal("cancel", reservationId)}
        className="w-[144px] rounded-xl border-2 border-nomad_black px-[12px] py-[8px] text-nomad_black"
      >
        예약 취소
      </button>
    </>
  );
}
