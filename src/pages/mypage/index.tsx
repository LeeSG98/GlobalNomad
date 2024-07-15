import InputForm from "@/components/mypage/InputForm";
import Profile from "@/components/common/profile/Profile";
import { useEffect, useState } from "react";
import Input from "@/components/mypage/Input";
import axiosInstance from "@/lib/axiosinstance";

export default function mypage() {
  const [userData, setUserData] = useState({
    nickname: "",
    email: "",
  });

  const [newNickname, setNewNickname] = useState("");

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

  const handleSave = () => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      axiosInstance
        .patch(
          "/users/me",
          { nickname: newNickname },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        )
        .then((res) => {
          setUserData({
            ...userData,
            nickname: newNickname,
          });
          alert("닉네임이 성공적으로 변경되었습니다.");
        });
    }
  };

  return (
    <>
      <div className="flex min-h-screen justify-center gap-6 bg-gray_FA pt-[72px]">
        {/* <Profile /> */}
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
          {/* <InputForm /> */}{" "}
          <div className="flex flex-col gap-[32px]">
            <Input
              label="닉네임"
              placeholder={userData.nickname}
              value={newNickname}
              onChange={handleNicknameChange}
            />
            <Input label="이메일" placeholder={userData.email} />
            <Input label="비밀번호" placeholder="8자 이상 입력해 주세요" />
            <Input
              label="비밀번호 재입력"
              placeholder="비밀번호를 한번 더 입력해 주세요"
            />
          </div>
        </div>
      </div>
    </>
  );
}
