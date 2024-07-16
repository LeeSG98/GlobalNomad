import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";
import InputBox from "./LoginInput";
import Button from "../common/Button";
import handleLogin from "@/api/handleLogin";
import { LoginErrorType } from "@/types/LoginPage";
import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import useLoginInput from "@/hooks/useLoginInput";
import useValidation from "@/hooks/useValidation";
import { ErrorMessages } from "@/types/LoginErrorMessages";
import { validateEmail, validatePassword } from "@/hooks/validation";

const LoginForm = () => {
  const { inputs, onChangeInput } = useLoginInput();
  const { email, password } = inputs;
  const router = useRouter();
  const { emailRegex, PASSWORD_MIN_LENGTH } = useValidation();

  const [errorData, setErrorData] = useState<LoginErrorType>({
    emailErrorMessage: null,
    passwordErrorMessage: null,
    unexpectedErrorMessage: null,
  });

  const { mutate } = useMutation({
    mutationFn: handleLogin,
    onSuccess: (data) => {
      const { accessToken, refreshToken } = data.data;
      setErrorData({
        emailErrorMessage: null,
        passwordErrorMessage: null,
        unexpectedErrorMessage: null,
      });
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      router.push("/"); // 로그인 성공 시 /페이지로 이동
    },
    onError: (error: AxiosError) => {
      if (error.response) {
        handleErrorResponse(error.response.status);
      }
    },
  });

  const handleErrorResponse = (status: number) => {
    if (status === 404) {
      handleNotFoundError();
    } else if (status === 400) {
      handleValidationError();
    } else {
      handleUnexpectedError();
    }
  };

  const handleNotFoundError = () => {
    setErrorData({
      emailErrorMessage: ErrorMessages.USER_NOT_FOUND,
      passwordErrorMessage: null,
      unexpectedErrorMessage: null,
    });
  };

  const handleValidationError = () => {
    const emailError = validateEmail(email, emailRegex);
    const passwordError = validatePassword(password, PASSWORD_MIN_LENGTH);

    setErrorData({
      emailErrorMessage: emailError,
      passwordErrorMessage: passwordError
        ? passwordError
        : ErrorMessages.PASSWORD_MISMATCH,
      unexpectedErrorMessage: null,
    });
  };

  const handleUnexpectedError = () => {
    setErrorData({
      emailErrorMessage: null,
      passwordErrorMessage: null,
      unexpectedErrorMessage:
        "예기치 않은 오류가 발생했습니다. 다시 시도해주세요.",
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ email, password });
  };

  return (
    <form onSubmit={onSubmit} className="mx-auto flex w-[40rem] flex-col gap-7">
      <InputBox
        inputName="email"
        onChangeInput={onChangeInput}
        value={email}
        labelName="이메일"
        errorData={errorData}
        setErrorData={setErrorData}
      />
      <InputBox
        inputName="password"
        onChangeInput={onChangeInput}
        value={password}
        labelName="비밀번호"
        errorData={errorData}
        setErrorData={setErrorData}
      />
      <Button>로그인</Button>
    </form>
  );
};

export default LoginForm;
