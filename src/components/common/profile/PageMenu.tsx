import { PageMenuProps } from "@/types/myPageProfile";
import Link from "next/link";
import { useRouter } from "next/router";

const PageMenu = ({
  linkTo,
  icon,
  activeIcon,
  name,
  setIsShowProfileForm,
}: PageMenuProps) => {
  const router = useRouter();
  const isActive = router.pathname.startsWith(linkTo);

  const handleClick = () => {
    if (linkTo === "/my/profile" && setIsShowProfileForm) {
      setIsShowProfileForm(true);
    }
  };

  return (
    <Link href={linkTo} legacyBehavior>
      <a
        className={`hover:bg-green-10 flex h-11 items-center self-stretch rounded-xl p-[9px] pb-[9px] pl-[16px] pr-[16px] ${
          isActive ? "bg-green-10 text-black" : "text-gray-60"
        }`}
        onClick={handleClick}
      >
        <li className="list-none">
          <div className="flex gap-[14px]">
            <img src={isActive ? activeIcon : icon} alt="Icon" />
            <span className="text-base font-bold">{name}</span>
          </div>
        </li>
      </a>
    </Link>
  );
};

export default PageMenu;
