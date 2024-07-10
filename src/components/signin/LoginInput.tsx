import { ChangeEvent, useState } from "react";
import Label from "../common/Label";
import { LoginErrorType } from "@/types/LoginPage";

interface InputBoxProps {
  inputName: string;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  labelName: string;
  errorData: LoginErrorType | null;
  setErrorData: React.Dispatch<React.SetStateAction<LoginErrorType>>;
}

const InputBox = ({
  inputName,
  onChangeInput,
  value,
  labelName,
  errorData,
  setErrorData,
}: InputBoxProps) => {
  const [isShowInputValue, setIsShowInputValue] = useState(false);
  const [inputType, setInputType] = useState(inputName);

  const onClickInput = () => {
    if (inputName === "email") {
      setErrorData((prev) => ({
        ...prev,
        emailErrorMessage: null,
      }));
    } else {
      setErrorData((prev) => ({
        ...prev,
        passwordErrorMessage: null,
      }));
    }
  };

  const onClickEyeIcon = () => {
    if (inputType === "password") {
      setInputType("text");
    } else if (inputType === "text") {
      setInputType("password");
    }
    setIsShowInputValue((prev) => !prev);
  };

  let borderColorClass = "";
  if (inputName === "email" && errorData?.emailErrorMessage) {
    borderColorClass = "border-red_F4";
  } else if (inputName === "password" && errorData?.passwordErrorMessage) {
    borderColorClass = "border-red_F4";
  }

  return (
    <div className="flex flex-col gap-2 relative">
      <Label labelName={labelName} />
      <div className="relative">
        <input
          name={inputName}
          type={inputType}
          id={inputName}
          onChange={onChangeInput}
          value={value}
          className={`border border-gray_A4 rounded-[6px] px-5 py-4 focus:outline-none w-full ${borderColorClass}`}
          onClick={onClickInput}
        />
        {labelName === "비밀번호" && (
          <button
            onClick={onClickEyeIcon}
            type="button"
            className="text-[0px] absolute top-1/2 right-[20px] transform -translate-y-1/2"
          >
            <img
              src={
                isShowInputValue === true
                  ? "/image/visibility_on.svg"
                  : "/image/visibility_off.svg"
              }
              alt={isShowInputValue === true ? "open_eye" : "close_eye"}
              className="w-[24px] h-[24px]"
            />
          </button>
        )}
      </div>
      {inputName === "email" && errorData?.emailErrorMessage && (
        <div className="text-red_47 text-xs ml-1">
          {errorData.emailErrorMessage}
        </div>
      )}
      {inputName === "password" && errorData?.passwordErrorMessage && (
        <div className="text-red_47 text-xs ml-1">
          {errorData.passwordErrorMessage}
        </div>
      )}
    </div>
  );
};

export default InputBox;
