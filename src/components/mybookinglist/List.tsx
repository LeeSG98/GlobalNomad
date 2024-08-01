// 무한 스크롤 미구현
// api를 통해 구현할 때는 map이용하기

import Booking from "./Booking";
import NoBooking from "./NoBooking";

export default function List() {
  return (
    <>
      {/* 예약 내역이 있을 경우 보여주는 화면 */}
      <div className="flex">{/* <Booking /> */}</div>
      {/* 예약 내역이 없을 때 보여주는 화면*/}
      <div className="flex items-center justify-center">
        <NoBooking />
      </div>
    </>
  );
}
