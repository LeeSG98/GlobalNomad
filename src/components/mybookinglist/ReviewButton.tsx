import { useModal } from "@/store/ModalContext";

interface ReviewButtonProps {
  onClick: () => void;
}

export default function ReviewButton({ onClick }: ReviewButtonProps) {
  return (
    <>
      <button
        onClick={onClick}
        className="w-[144px] rounded-xl bg-nomad_black px-[12px] py-[10px] text-white"
      >
        후기 작성
      </button>
    </>
  );
}
