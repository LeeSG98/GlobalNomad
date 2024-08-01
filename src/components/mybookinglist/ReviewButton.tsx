import { useModal } from "@/store/ModalProvider";

export default function ReviewButton() {
  const { openModal } = useModal();

  return (
    <>
      <button
        onClick={() => openModal("review")}
        className="w-[144px] rounded-xl bg-nomad_black px-[12px] py-[10px] text-white"
      >
        후기 작성
      </button>
    </>
  );
}
