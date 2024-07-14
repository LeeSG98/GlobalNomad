import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";
import InputBox from "./LoginInput";
import Button from "../common/Button";
import handleLogin from "@/api/handleLogin";
import { LoginErrorType } from "@/types/LoginPage";
import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

const LoginForm = () => {
  const router = useRouter();

  // 이메일 정규식
  const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

  // 비밀번호 최소길이
  const PASSWORD_MIN_LENGTH = 8;
  const [errorData, setErrorData] = useState<LoginErrorType>({
    emailErrorMessage: null,
    passwordErrorMessage: null,
    unexpectedErrorMessage: null,
  });

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
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
        const { email, password } = inputs;

        if (error.response.status === 404) {
          if (password.length > 0 && password.length < PASSWORD_MIN_LENGTH) {
            setErrorData((prev) => ({
              ...prev,
              passwordErrorMessage: "8자 이상 작성해 주세요.",
              emailErrorMessage: null,
            }));
          } else {
            setErrorData({
              emailErrorMessage: "존재하지 않는 유저입니다.",
              passwordErrorMessage: null,
              unexpectedErrorMessage: null,
            });
          }
        } else if (error.response.status === 400) {
          if (password.length >= 8 && emailRegex.test(email)) {
            setErrorData((prev) => ({
              ...prev,
              emailErrorMessage: null,
              passwordErrorMessage: "비밀번호가 일치하지 않습니다.",
            }));
          } else {
            if (password.length > 0 && password.length < PASSWORD_MIN_LENGTH) {
              setErrorData((prev) => ({
                ...prev,
                passwordErrorMessage: "8자 이상 작성해 주세요.",
              }));
            } else if (password.length === 0) {
              setErrorData((prev) => ({
                ...prev,
                passwordErrorMessage: "비밀번호를 입력해주세요.",
              }));
            } else {
              setErrorData((prev) => ({
                ...prev,
                passwordErrorMessage: null,
              }));
            }

            // 이메일 확인
            if (email.length === 0) {
              setErrorData((prev) => ({
                ...prev,
                emailErrorMessage: "이메일을 입력해주세요",
              }));
            } else if (!emailRegex.test(email)) {
              setErrorData((prev) => ({
                ...prev,
                emailErrorMessage: "이메일 형식으로 작성해주세요.",
              }));
            } else {
              setErrorData((prev) => ({
                ...prev,
                emailErrorMessage: null,
              }));
            }
          }
        }
      }
    },
  });

  const { email, password } = inputs;

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
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
