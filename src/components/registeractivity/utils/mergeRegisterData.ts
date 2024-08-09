import { RegisterData } from "@/types/registerActivity";

const defaultRegisterData: RegisterData = {
  title: "",
  category: "",
  description: "",
  price: 0,
  address: "",
  bannerImageUrl: "",
  subImageUrls: [],
  schedules: [],
};

const mergeRegisterData = (
  oldData: RegisterData | undefined,
  newData: Partial<RegisterData>,
): RegisterData => {
  return { ...defaultRegisterData, ...oldData, ...newData };
};

export default mergeRegisterData;