import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Profile from "@/components/common/profile/Profile";
import Submit from "@/components/modifyactivity/Submit";
import Title from "@/components/modifyactivity/Title";
import Category from "@/components/modifyactivity/Category";
import Description from "@/components/modifyactivity/Description";
import Price from "@/components/modifyactivity/Price";
import Address from "@/components/modifyactivity/Address";
import Reserve from "@/components/modifyactivity/Reserve";
import Banner from "@/components/modifyactivity/Banner";
import Intro from "@/components/modifyactivity/Intro";
import getActivity from "@/api/getActivity";
import { ActivityType } from "@/types/activitypage";

const ModifyActivity = () => {
  // 컴포넌트 이름을 대문자로 수정
  const router = useRouter();
  const { id } = router.query; // useParams 대신 Next.js의 useRouter 사용
  const [activityData, setActivityData] = useState<ActivityType | null>(null);

  useEffect(() => {
    if (!id) {
      router.push("/error");
      return;
    }

    const fetchActivity = async () => {
      try {
        const data = await getActivity(id as string); // id는 string으로 강제 변환
        setActivityData(data);
      } catch (error) {
        console.error("Activity 데이터를 가져오는 데 실패했습니다.", error);
        router.push("/error");
      }
    };

    fetchActivity();
  }, [id, router]);

  if (!activityData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center gap-[1.5rem] bg-gray_FA pt-[4.5rem]">
      <Profile />
      <div className="flex w-[49.5rem] flex-col">
        {id && <Submit id={id as string} schedules={activityData.schedules} />}
        <Title title={activityData.title} />
        <Category category={activityData.category} />
        <Description description={activityData.description} />
        <Price price={activityData.price} />
        <Address address={activityData.address} />
        <Reserve schedules={activityData.schedules} />
        <Banner bannerImageUrl={activityData.bannerImageUrl} />
        <Intro subImages={activityData.subImages} />
      </div>
    </div>
  );
};

export default ModifyActivity;
