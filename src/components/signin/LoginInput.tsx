import { ChangeEvent, useState } from "react";
import Label from "../common/Label";
import { LoginErrorType } from "@/types/LoginPage";

interface InputBoxProps {
  inputName: "email" | "password";
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
  // 비밀번호 보기/숨기기 상태 관리
  const [isShowInputValue, setIsShowInputValue] = useState(false);

  // Input의 타입 상태 관리
  const [inputType, setInputType] = useState(
    inputName === "password" ? "password" : "text",
  );

  // Input 클릭 시 호출되는 함수: 해당 Input의 오류 메시지를 초기화
  const onClickInput = () => {
    setErrorData((prev) => ({
      ...prev,
      [`${inputName}ErrorMessage`]: null,
    }));
  };

  // 눈 아이콘 클릭 시 호출되는 함수: 비밀번호 보기/숨기기 토글
  const onClickEyeIcon = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
    setIsShowInputValue((prev) => !prev);
  };

  // Input의 테두리 색상 클래스를 결정하는 함수
  const getBorderColorClass = () => {
    if (inputName === "email" && errorData?.emailErrorMessage) {
      return "border-red_F4";
    } else if (inputName === "password" && errorData?.passwordErrorMessage) {
      return "border-red_F4";
    }
    return "";
  };

  // Input의 오류 메시지를 가져오는 함수
  const getErrorMessage = () => {
    if (inputName === "email") {
      return errorData?.emailErrorMessage;
    } else if (inputName === "password") {
      return errorData?.passwordErrorMessage;
    }
    return null;
  };

  return (
    <div className="relative flex flex-col gap-2">
      <Label labelName={labelName} /> {/* Input 위에 표시될 라벨 */}
      <div className="relative">
        <input
          name={inputName}
          type={inputType}
          id={inputName}
          onChange={onChangeInput}
          value={value}
          className={`w-full rounded-[6px] border border-gray_A4 px-5 py-4 focus:outline-none ${getBorderColorClass()}`}
          onClick={onClickInput}
        />
        {/* 비밀번호 눈 아이콘 */}
        {inputName === "password" && (
          <button
            onClick={onClickEyeIcon}
            type="button"
            className="absolute right-[20px] top-1/2 -translate-y-1/2 transform text-[0px]"
          >
            <img
              src={
                isShowInputValue
                  ? "/image/visibility_on.svg"
                  : "/image/visibility_off.svg"
              }
              alt={isShowInputValue ? "open_eye" : "close_eye"}
              className="h-[24px] w-[24px]"
            />
          </button>
        )}
      </div>
      {/* Input에 오류 메시지가 있을 경우 해당 오류 메시지 출력 */}
      {getErrorMessage() && (
        <div className="ml-1 text-xs text-red_47">{getErrorMessage()}</div>
      )}
    </div>
  );
};

export default InputBox;
