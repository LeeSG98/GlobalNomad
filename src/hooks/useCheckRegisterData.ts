import { RegisterData } from "@/types/registerActivity";

const requiredFields: { [key in keyof RegisterData]?: string } = {
  title: "제목은 필수 입력 사항입니다.",
  category: "카테고리는 필수 입력 사항입니다.",
  description: "설명은 필수 입력 사항입니다.",
  price: "가격은 필수 입력 사항입니다.",
  address: "주소는 필수 입력 사항입니다.",
  bannerImageUrl: "배너 이미지는 필수 입력 사항입니다.",
};

const useCheckRegisterData = () => {
  const checkRequireData = (registerData: RegisterData | undefined): boolean => {
    if (!registerData) {
      console.error("입력 사항을 기입해주세요.");
      return false;
    }
    return Object.entries(requiredFields).every(([key, message]) => {
      if (!registerData[key as keyof RegisterData]) {
        console.error(message);
        return false;
      }
      if (registerData.schedules.length === 0) {
        console.error("예약 가능한 시간대는 필수 입력 사항입니다.");
        return false;
      }
      return true;
    });
  };

  return { checkRequireData };
};

export default useCheckRegisterData;