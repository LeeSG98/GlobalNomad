import NoBooking from '@/components/bookingstatus/NoBooking';
import ReserveStatusContent from '@/components/bookingstatus/BookingStatusContent';
import useInfiniteMyActivity from '@/hooks/useLoadMoreActivities';
import React from 'react';

const BookingStatusPage = () => {
  const { myActivityData } = useInfiniteMyActivity();
  const activities = myActivityData?.pages.flatMap((page) => page.activities) || [];

  return activities.length === 0 ? (
    <div>
      <h1 className="text-[32px] font-bold text-black mb-8 dark:text-darkMode-white-10">
        예약 현황
      </h1>
      <NoBooking />
    </div>
  ) : (
    <ReserveStatusContent />
  );
};

export default BookingStatusPage;
 