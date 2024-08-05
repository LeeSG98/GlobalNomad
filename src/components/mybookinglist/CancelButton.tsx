interface ReviewButtonProps {
  onClick: () => void;
}

export default function CancelButton({ onClick }: ReviewButtonProps) {
  return (
    <>
      <button
        onClick={onClick}
        className="w-[144px] rounded-xl border-2 border-nomad_black px-[12px] py-[8px] text-nomad_black"
      >
        예약 취소
      </button>
    </>
  );
}
