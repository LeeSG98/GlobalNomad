import { useEffect, useState } from "react";
import Input from "./Input";
import axiosInstance from "@/lib/axiosinstance";

export default function InputForm() {
  const [userData, setUserData] = useState({
    nickname: "",
    email: "",
  });

  const [nickname, setNickname] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      axiosInstance
        .get("/users/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          setUserData({
            nickname: res.data.nickname,
            email: res.data.email,
          });
          setNickname(res.data.nickname);
          console.log(res);
        });
    }
  }, []);

  return (
    <div className="flex flex-col gap-[32px]">
      <Input
        label="닉네임"
        placeholder={userData.nickname}
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <Input label="이메일" placeholder={userData.email} />
      <Input label="비밀번호" placeholder="8자 이상 입력해 주세요" />
      <Input
        label="비밀번호 재입력"
        placeholder="비밀번호를 한번 더 입력해 주세요"
      />
    </div>
  );
}
