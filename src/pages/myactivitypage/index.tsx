import Profile from "@/components/common/profile/Profile";
import React from 'react';
import MyActivityCardHeader from '@/components/myactivity/MyActivityCardHeader';
import MyActivityCardList from '@/components/myactivity/MyActivityCardList';

const MyActivityPage = () => (
    <div className="bg-gray-10 min-h-[calc(100vh-160px)] dark:bg-darkMode-black-10">
        <div className="flex gap-6 justify-center bg-[#FAFAFA] pt-[72px] pb-[72px] md:px-6 md:justify-normal md:gap-4 sm:block sm:px-[16px] md:pt-[24px] sm:pt-[24px] md:pb-[24px] sm:pb-[24px] dark:bg-darkMode-black-10">
        <Profile />
            <div className="w-[800px] sm:w-full">
                <section className="flex flex-col w-full max-w-[50rem] items-start">
                    <MyActivityCardHeader />
                    <MyActivityCardList />
                </section>
            </div>
        </div>
    </div>
);

export default MyActivityPage;