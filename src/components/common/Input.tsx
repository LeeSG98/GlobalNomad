import { ChangeEvent, useState } from "react";
import Label from "./Label";

interface InputBoxProps {
  valueType: string;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  labelName: string;
}

const InputBox = ({
  valueType,
  onChangeInput,
  value,
  labelName,
}: InputBoxProps) => {
  const [isShowInputValue, setIsShowInputValue] = useState(false);
  const [inputType, setInputType] = useState(valueType);
  const onClickEyeIcon = () => {
    if (inputType === "password") {
      setInputType("text");
    } else if (inputType === "text") {
      setInputType("password");
    }
    setIsShowInputValue((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-2 relative">
      <Label labelName={labelName} />
      <input
        name={valueType}
        type={inputType}
        id={valueType}
        onChange={onChangeInput}
        value={value}
        className="border border-gray-60 rounded-[6px] px-5 py-4 focus:outline-none"
      />
      {labelName === "비밀번호" ? (
        <button
          onClick={onClickEyeIcon}
          type="button"
          className="text-[0px] absolute bottom-[16px] right-[20px]"
        >
          <img
            src={
              isShowInputValue === true
                ? "/image/visibility_on.svg"
                : "/image/visibility_off.svg"
            }
            alt="arrow_image"
            className="w-[24px] h-[24px]"
          />
        </button>
      ) : null}
    </div>
  );
};

export default InputBox;
