interface AuthButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
}
const Button = ({ children, disabled = false }: AuthButtonProps) => (
  <button
    type="submit"
    className={`rounded-[6px] px-8 py-4 text-lg font-semibold text-white transition-opacity ${
      disabled ? "bg-gray-400" : "bg-blue-500 hover:opacity-90"
    }`}
  >
    {children}
  </button>
);

export default Button;
