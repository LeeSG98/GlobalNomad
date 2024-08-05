import React from 'react';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Profile from "@/components/common/profile/Profile";
import NoBooking from '@/components/bookingstatus/NoBooking';
import ReserveStatusContent from '@/components/bookingstatus/BookingStatusContent';
import useLoadMoreActivities from '@/hooks/useLoadMoreActivities';

const BookingStatus = () => {
    const { myActivityData } = useLoadMoreActivities();
    const activities = myActivityData?.pages.flatMap((page) => page.activities) || [];

    return (
        <div className="flex flex-col w-full min-h-screen">
            <Header />
            <div className="bg-gray-10 min-h-[calc(100vh-160px)] dark:bg-darkMode-black-10">
                <div className="flex gap-6 justify-center bg-[#FAFAFA] pt-[72px] pb-[72px] md:px-6 md:justify-normal md:gap-4 sm:block sm:px-[16px] md:pt-[24px] sm:pt-[24px] md:pb-[24px] sm:pb-[24px] dark:bg-darkMode-black-10">
                    <Profile />
                    <div className="w-[800px] sm:w-full">
                        {activities.length === 0 ? (
                            <div>
                                <h1 className="text-[32px] font-bold text-black mb-8 dark:text-darkMode-white-10">
                                    예약 현황
                                </h1>
                                <NoBooking />
                            </div>
                        ) : (
                            <ReserveStatusContent />
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default BookingStatus;
