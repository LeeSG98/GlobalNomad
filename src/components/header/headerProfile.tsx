import getUserInfo from "@/api/getUserInfo";
import { useQuery } from "@tanstack/react-query";
import HeaderProfileImage from "./headerProfileImage";
import { useEffect, useRef, useState } from "react";
import ProfileDropdown from "./ProfileDropdown";

const HeaderProfile = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: getUserInfo,
  });
  console.log(data);

  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownIsOpen((prev) => !prev);
  };

  // Dropdown Box 외부 클릭시, 닫히게 함
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  if (isLoading) {
    return <div>프로필을 불러오고 있습니다</div>;
  }

  if (isError || !data) {
    return <div>프로필을 불러오는데 실패했습니다</div>;
  }

  return (
    // <div className="flex items-center gap-[10px]">
    //   <HeaderProfileImage
    //     nickname={data.nickname}
    //     profileImageUrl={data.profileImageUrl}
    //   />
    <div
      className="relative flex cursor-pointer items-center gap-[10px]"
      onClick={toggleDropdown}
      ref={dropdownRef}
    >
      <HeaderProfileImage
        nickname={data.nickname}
        profileImageUrl={data.profileImageUrl}
      />
      <div className="text-sm">{data?.nickname}</div>
      {dropdownIsOpen && <ProfileDropdown />}
    </div>
  );
};

export default HeaderProfile;
