import { fetchReservation } from "@/api/api";
import Profile from "@/components/common/profile/Profile";
import Booking from "@/components/mybookinglist/Booking";
import Filter from "@/components/mybookinglist/Filter";
import NoBooking from "@/components/mybookinglist/NoBooking";
import useLoadMoreActivities from "@/hooks/useLoadMoreActivities";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Mybookinglist() {
  const [filter, setFilter] = useState("");
  const [reservations, setReservations] = useState([]);
  const {
    myActivityData,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    refetch,
  } = useLoadMoreActivities();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  useEffect(() => {
    const loadReservations = async () => {
      const response = await fetchReservation();
      setReservations(response.reservations);
    };
    loadReservations();
  }, []);

  const activities =
    myActivityData?.pages.flatMap((page) => page.activities) || [];

  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <img src="/image/spinner.svg" alt="loding_spinner" />
      </div>
    );
  }

  return (
    <>
      <div className="flex min-h-[calc(100vh-160px)] justify-center gap-6 bg-gray_FA pt-[72px] sm:pt-[24px]">
        <Profile />
        <div className="flex w-[792px] flex-col gap-[24px]">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">예약 내역</h1>
            <Filter setFilter={setFilter} />
          </div>

          <div className="custom-scrollbar h-[43rem] w-full overflow-y-auto">
            {activities.length !== 0 ? (
              <>
                <ul className="flex flex-col gap-6">
                  <Booking filter={filter} reservations={reservations} />
                </ul>
                {isFetchingNextPage && (
                  <div className="flex items-center justify-center">
                    <img src="/image/spinner.svg" alt="loding_spinner" />
                  </div>
                )}
              </>
            ) : (
              <NoBooking />
            )}
            <div ref={ref} className="h-[1.5rem]" />
          </div>
        </div>
      </div>
    </>
  );
}
