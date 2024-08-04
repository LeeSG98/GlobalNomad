import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Link from "next/link";
import MainPage from "./MainPage";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center gap-3 pt-5">
        <Link href="/BookingStatusPage">예약현황</Link>
        <Link href="/mybookinglist">예약내역</Link>
        <Link href="/MainPage">메인페이지</Link>
      </div>
    </>
  );
}
