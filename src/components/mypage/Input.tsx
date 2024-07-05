interface InputProps {
  placeholder?: string;
}

export default function Input({ placeholder }: InputProps) {
  return (
    <>
      <input
        className="h-[55px] rounded border border-black px-[16px] py-[8px]"
        placeholder={placeholder}
      />
    </>
  );
}
