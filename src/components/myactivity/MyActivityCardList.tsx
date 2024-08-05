import useLoadMoreActivities from "@/hooks/useLoadMoreActivities";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Nobooking from "../bookingstatus/NoBooking";
import MyActivityCard from "./MyActivityCard";
import React from "react";

const MyActivityCardList = () => {
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
    <div className="custom-scrollbar h-[34rem] w-full overflow-y-auto">
      {activities.length !== 0 ? (
        <>
          <ul className="flex flex-col gap-6">
            {activities.map((activity) => (
              <MyActivityCard
                key={activity.id}
                activity={activity}
                refetchActivities={refetch}
              />
            ))}
          </ul>
          {isFetchingNextPage && (
            <div className="flex items-center justify-center">
              <img src="/image/spinner.svg" alt="loding_spinner" />
            </div>
          )}
        </>
      ) : (
        <Nobooking />
      )}
      <div ref={ref} className="h-[1.5rem]" />
    </div>
  );
};

export default MyActivityCardList;
