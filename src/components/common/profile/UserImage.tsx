import React, { useEffect, useState } from "react";
import axiosInstance from "@/lib/axiosinstance";
import { FaRegUser } from "react-icons/fa";

interface UserImage {
  profileImageUrl?: string;
}

const UserImage = () => {
  const [userData, setUserData] = useState<UserImage>({
    profileImageUrl: "",
  });

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      axiosInstance
        .get("users/me", {
          headers: {},
        })
        .then((res) => {
          setUserData({
            profileImageUrl: res.data.profile,
          });
        });
    }
  });

  return (
    <div>
      <div className="flex h-[160px] w-[160px] items-center justify-center rounded-full bg-gray-200 shadow">
        <FaRegUser className="text-6xl text-gray-400" />
      </div>
    </div>
  );
};

export default UserImage;
