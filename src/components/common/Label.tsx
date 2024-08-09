interface LabelProps {
  labelName: string;
}

const Label = ({ labelName }: LabelProps) => (
  <label
    htmlFor="email"
    className="font-['Pretendard'] text-base text-[#1B1B1B]"
  >
    {labelName}
  </label>
);

export default Label;
