import React from "react";
import Profile from "@/components/common/profile/Profile";
import NoBooking from "@/components/bookingstatus/NoBooking";
import ReserveStatusContent from "@/components/bookingstatus/BookingStatusContent";
import useLoadMoreActivities from "@/hooks/useLoadMoreActivities";

const BookingStatus = () => {
  const { myActivityData } = useLoadMoreActivities();
  const activities =
    myActivityData?.pages.flatMap((page) => page.activities) || [];

  return (
    <div className="min-h-[calc(100vh-160px)] bg-gray_FA">
      <div className="flex justify-center gap-6 bg-[#FAFAFA] pb-[72px] pt-[72px] sm:block sm:px-[16px] sm:pb-[24px] sm:pt-[24px] md:justify-normal md:gap-4 md:px-6 md:pb-[24px] md:pt-[24px]">
        <Profile />
        <div className="w-[800px] sm:w-full">
          {activities.length === 0 ? (
            <div>
              <h1 className="mb-8 text-[32px] font-bold text-black">
                예약 현황
              </h1>
              <NoBooking />
            </div>
          ) : (
            <ReserveStatusContent />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingStatus;
