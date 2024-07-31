import { fetchReservation } from "@/api/api";
import Profile from "@/components/common/profile/Profile";
import Booking from "@/components/mybookinglist/Booking";
import CancleButton from "@/components/mybookinglist/CancleButton";
import Filter from "@/components/mybookinglist/Filter";
import List from "@/components/mybookinglist/List";
import NoBooking from "@/components/mybookinglist/NoBooking";
import ReviewButton from "@/components/mybookinglist/ReviewButton";
import { useEffect, useState } from "react";

export default function mybookinglist() {
  const [filter, setFilter] = useState("");
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const loadReservations = async () => {
      const response = await fetchReservation();
      setReservations(response.reservations);
    };
    loadReservations();
  }, []);

  return (
    <>
      <div className="flex min-h-screen justify-center gap-6 bg-gray_FA pt-[72px]">
        <Profile />
        <div className="flex w-[792px] flex-col gap-[24px]">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">예약 내역</h1>
            <Filter setFilter={setFilter} />
          </div>
          <ReviewButton />
          <CancleButton />
          <div>
            {reservations.length > 0 ? (
              /* 예약 내역이 있을 경우 보여주는 화면 */
              <div className="flex">
                <Booking filter={filter} reservations={reservations} />
              </div>
            ) : (
              /* 예약 내역이 없을 때 보여주는 화면*/
              <div className="flex items-center justify-center">
                <NoBooking />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
