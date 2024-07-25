import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import getUserInfo from "@/api/getUserInfo";

interface UserImage {
  profileImageUrl?: string;
}

const UserImage = () => {
  const [userData, setUserData] = useState<UserImage>({
    profileImageUrl: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserInfo();
        setUserData({
          profileImageUrl: data.profileImageUrl,
        });
      } catch (error) {
        console.error("Failed", error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div>
      <div className="flex h-[160px] w-[160px] items-center justify-center rounded-full bg-gray-200 shadow">
        {userData.profileImageUrl ? (
          <img
            src={userData.profileImageUrl}
            alt="유저 이미지"
            className="h-full w-full rounded-full"
          />
        ) : (
          <FaRegUser className="text-6xl text-gray-400" />
        )}
      </div>
    </div>
  );
};

export default UserImage;
