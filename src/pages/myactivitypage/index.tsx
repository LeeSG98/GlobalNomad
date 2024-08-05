import Profile from "@/components/common/profile/Profile";
import React from "react";
import MyActivityCardHeader from "@/components/myactivity/MyActivityCardHeader";
import MyActivityCardList from "@/components/myactivity/MyActivityCardList";

const MyActivityPage = () => (
  <div className="min-h-[calc(100vh-160px)] bg-gray_FA">
    <div className="flex justify-center gap-6 bg-[#FAFAFA] pb-[72px] pt-[72px] sm:block sm:px-[16px] sm:pb-[24px] sm:pt-[24px] md:justify-normal md:gap-4 md:px-6 md:pb-[24px] md:pt-[24px]">
      <Profile />
      <div className="w-[800px] sm:w-full">
        <section className="flex w-full max-w-[50rem] flex-col items-start">
          <MyActivityCardHeader />
          <MyActivityCardList />
        </section>
      </div>
    </div>
  </div>
);

export default MyActivityPage;
