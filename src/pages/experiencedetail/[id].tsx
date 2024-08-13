import React, { useEffect, useState } from "react";
import Top from "@/components/experiencedetail/Top";
import { useRouter } from "next/router";
import ExperienceDescription from "@/components/experiencedetail/ExperienceDescription";
import ReviewSection from "@/components/experiencedetail/ReviewSection";
import ReservationDetails from "@/components/experiencedetail/ReservationDetails";
import Gallery from "@/components/experiencedetail/Gallery";
import axios from "axios";
import axiosInstance from "@/lib/axiosinstance";
import { skipToken, useQuery } from "@tanstack/react-query";
import { getActivity } from "@/api/activity";
import { getFirstSegment } from "@/utils/url-util";
//type
const ExperienceDetailPage: React.FC = () => {
  const router = useRouter();
  const id = getFirstSegment(router.query?.id);
  // const [experienceData, setexperienceData] = useState<ActivityResponse | null>(null);

  // 1. api 분석
  // 2. fetcher 함수 작성
  // 3. Response 타입 작성 (json to typescript, schema 를 통해 한번 더 체크, 이름 수정)
  // 4. react query 연결
  // 4-2. 코드 정리 (type, fetcher 분리)
  // 5. Ui 에 데이터 바인딩

  // src/api/models/activity.ts : 타입 관련
  // src/api/activity.ts

  // useEffect(() => {
  //   // api 호출
  //   async function fetcher() {
  //     if (!id) {
  //       return;
  //     }
  //     const response = await axiosInstance.get<ActivityResponse>(`/activities/${id}`)
  //     const data = response.data;
  //     setexperienceData(data);
  //   }

  //   fetcher();
  // }, [id])

  const { data } = useQuery({
    queryKey: ["activity", { id }],
    queryFn: id ? () => getActivity(id) : skipToken,
    enabled: !!id,
  });

  console.log(data);

  // /experiencedetail/1234

  // <Card>
  //   <Link href={`/experiencedetail/${id}`} />
  // </Card>

  return (
    <div className="flex min-h-screen flex-col items-center space-y-8 bg-[#FAFAFA] p-8">
      {data && (
        <>
          <Top
            category={data.category}
            title={data.title}
            address={data.address}
            reviewCount={data.reviewCount}
            rating={data.rating}
          />
          <div className="w-full max-w-[1200px]">
            <Gallery subImages={[]} />
          </div>
          <div className="flex w-full max-w-[1200px] pt-8 md:space-x-8 md:space-y-0">
            <ExperienceDescription description={""} address={""} />
            <ReservationDetails />
          </div>
          <ReviewSection />
        </>
      )}
    </div>
  );
};

/* */
export default ExperienceDetailPage;
