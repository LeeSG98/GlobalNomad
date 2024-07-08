import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center gap-3 pt-5">
        <Link href="/mypage">마이페이지</Link>
        <Link href="/mybookingpage">예약현황</Link>
        <Link href="/mybookinglist">예약내역</Link>
      </div>
    </>
  );
}
