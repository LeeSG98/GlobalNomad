// import Link from "next/link";
// import { useRouter } from "next/router";
// import HeaderProfile from "./headerProfile";
// import { useAuth } from "@/contexts/AuthContext";
// import Notification from "./Notification";

// const Header = () => {
//   const router = useRouter();
//   const { isLoggedIn } = useAuth();

//   return (
//     <div className="flex items-center justify-around py-[19px] md:justify-between md:px-[24px]">
//       <Link href="/">
//         <img
//           className="cursor-pointer"
//           src="/image/header_logo.svg"
//           alt="logo_small_icon"
//         />
//       </Link>
//       {router.pathname === "/" ? ( // 이러면 관리하기 어려움, 로그인 유무만 해서 바꾸기
//         isLoggedIn ? (
//           <div className="relative flex items-center gap-[25px] sm:gap-[12px]">
//             <Notification />
//             <img src="/image/header_bar.svg" alt="header_bar_icon" />
//             <HeaderProfile />
//           </div>
//         ) : (
//           <div className="flex gap-[25px] text-[14px] font-medium text-[#1B1B1B]">
//             <Link href="/signin">로그인</Link>
//             <Link href="/signup">회원가입</Link>
//           </div>
//         )
//       ) : (
//         <div className="relative flex items-center gap-[25px] sm:gap-[12px]">
//           <Notification />
//           <img src="/image/header_bar.svg" alt="header_bar_icon" />
//           <HeaderProfile />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;

// // 헤더 컴포넌트 적용할 부분

import Link from "next/link";
import { useRouter } from "next/router";
import HeaderProfile from "./headerProfile";
import { useAuth } from "@/contexts/AuthContext";
import Notification from "./Notification";

const Header = () => {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  return (
    <div className="flex items-center justify-around py-[19px] md:justify-between md:px-[24px]">
      <Link href="/">
        <img
          className="cursor-pointer"
          src="/image/header_logo.svg"
          alt="logo_small_icon"
        />
      </Link>
      {isLoggedIn ? (
        <div className="relative flex items-center gap-[25px] sm:gap-[12px]">
          <Notification />
          <img src="/image/header_bar.svg" alt="header_bar_icon" />
          <HeaderProfile />
        </div>
      ) : (
        <div className="flex gap-[25px] text-[14px] font-medium text-[#1B1B1B]">
          <Link href="/signin">로그인</Link>
          <Link href="/signup">회원가입</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
