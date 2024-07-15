interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <>
      <div className="flex flex-col gap-[16px]">
        <h2 className="text-xl font-bold">{label}</h2>
        <input
          className="h-[55px] rounded border border-black px-[16px] py-[8px]"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
}
