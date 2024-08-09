import { ChangeEvent } from "react";

interface InputProps {
  label?: string;
  passwordError?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function Input({
  label,
  passwordError,
  placeholder,
  value,
  onChange,
  type,
  onBlur,
}: InputProps) {
  return (
    <>
      <div className="flex flex-col gap-[16px]">
        <div className="flex items-center gap-[24px]">
          <h2 className="text-xl font-bold">{label}</h2>
          <h3 className="text-red-500">{passwordError}</h3>
        </div>
        <input
          className="h-[55px] rounded border border-black px-[16px] py-[8px]"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type={type}
          onBlur={onBlur}
        />
      </div>
    </>
  );
}
