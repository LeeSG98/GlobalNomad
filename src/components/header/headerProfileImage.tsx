import React from "react";
import NoProfileImage from "./NoProfile";

const HeaderProfileImage = ({
  nickname,
  profileImageUrl,
}: {
  nickname: string;
  profileImageUrl: string;
}) => {
  if (!profileImageUrl) {
    return <NoProfileImage nickname={nickname} />;
  }
  return (
    <div
      className="h-8 w-8 overflow-hidden rounded-full bg-cover"
      style={{
        backgroundImage: `url(${profileImageUrl})`,
        backgroundSize: "contain",
      }}
    />
  );
};
export default HeaderProfileImage;
