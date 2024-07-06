import { ChangeEvent, FormEvent, useState } from "react";
import InputBox from "./LoginInput";
import Button from "../common/Button";

import { AxiosError } from "axios";
import axios from "@/lib/axios";

const LoginForm = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
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
    try {
      const response = await axios.post("/auth/login", { email, password });
      const { accessToken, refreshToken } = response.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("에러 발생:", error.message);
      } else {
        console.error("에러 발생:", error);
      }
    }
  };
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-7 w-[40rem] mx-auto">
      <InputBox
        inputName="email"
        onChangeInput={onChangeInput}
        value={email}
        labelName="이메일"
      />
      <InputBox
        inputName="password"
        onChangeInput={onChangeInput}
        value={password}
        labelName="비밀번호"
      />
      <Button>로그인</Button>
    </form>
  );
};

export default LoginForm;
