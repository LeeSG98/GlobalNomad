interface InputProps {
  placeholder?: string;
}

export default function Input({ placeholder }: InputProps) {
  return (
    <>
      <input
        className="px-[16px] py-[8px] rounded border border-black h-[55px]"
        placeholder={placeholder}
      />
    </>
  );
}
