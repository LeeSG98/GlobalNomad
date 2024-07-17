import InputForm from "@/components/mypage/InputForm";
import Profile from "@/components/common/profile/Profile";
import { useEffect, useState } from "react";
import Input from "@/components/mypage/Input";
import axiosInstance from "@/lib/axiosinstance";

interface UserData {
  nickname: string;
  email: string;
  newPassword?: string;
}

export default function mypage() {
  const [userData, setUserData] = useState<UserData>({
    nickname: "",
    email: "",
  });

  const [newNickname, setNewNickname] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
          console.log(res);
        });
    }
  }, []);

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNickname(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleConfirmPasswordBlur = () => {
    if (newPassword !== confirmPassword) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordError("");
    }
  };

  const handleSave = () => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      const updateData: Partial<UserData> = {
        nickname: newNickname,
      };

      if (newPassword) {
        updateData.newPassword = newPassword;
      }

      axiosInstance
        .patch("/users/me", updateData, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          setUserData((prevData) => ({
            ...prevData,
            nickname: newNickname,
            newPassword: newPassword,
          }));
          alert("정보가 성공적으로 변경되었습니다.");
        });
    }
  };

  return (
    <>
      <div className="flex min-h-screen justify-center gap-6 bg-gray_FA pt-[72px]">
        <Profile />
        <div className="flex w-[792px] flex-col gap-[24px]">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">내 정보</h1>
            <button
              className="h-[48px] w-[120px] rounded bg-nomad_black px-4 py-2 text-white"
              onClick={handleSave}
            >
              저장하기
            </button>
          </div>
          <div className="flex flex-col gap-[32px]">
            {/* 캐시를 이용해서 새로고침을 하지 않더라도 정보가 바로 반영할 수 있게하기
            tanstack query를 활용해보기. 기존의 axios코드를 
            inputForm 컴포넌트로 작성하기*/}
            <Input
              label="닉네임"
              placeholder={userData.nickname}
              value={newNickname}
              onChange={handleNicknameChange}
            />
            <Input label="이메일" placeholder={userData.email} />
            <Input
              label="비밀번호"
              placeholder="8자 이상 입력해 주세요"
              type="password"
              value={newPassword}
              onChange={handlePasswordChange}
            />
            <Input
              label="비밀번호 재입력"
              passwordError={passwordError}
              placeholder="비밀번호를 한번 더 입력해 주세요"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              onBlur={handleConfirmPasswordBlur}
              className={passwordError ? "border-red-500" : ""}
            />
          </div>
        </div>
      </div>
    </>
  );
}
