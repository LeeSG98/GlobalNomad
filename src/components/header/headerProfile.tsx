import getUserInfo from "@/api/getUserInfo";
import { useQuery } from "@tanstack/react-query";
import HeaderProfileImage from "./headerProfileImage";

const HeaderProfile = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: getUserInfo,
  });
  console.log(data);
  if (isLoading) {
    return <div>프로필을 불러오고 있습니다</div>;
  }

  if (isError || !data) {
    return <div>프로필을 불러오는데 실패했습니다</div>;
  }

  return (
    <div className="flex items-center gap-[10px]">
      <HeaderProfileImage
        nickname={data.nickname}
        profileImageUrl={data.profileImageUrl}
      />
      <div className="text-sm">{data?.nickname}</div>
    </div>
  );
};

export default HeaderProfile;
