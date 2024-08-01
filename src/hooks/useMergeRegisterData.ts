import { useQueryClient } from "@tanstack/react-query";
import { RegisterData, Schedule } from "@/types/registerActivity";
import queryKeys from "@/api/reactQuery/queryKeys";
import mergeRegisterData from "@/components/registeractivity/utils/mergeRegisterData"
import { Category } from "@/types/category";

const useMergeRegisterData = () => {
  const queryClient = useQueryClient();

  const mergeTitle = (title: string) => {
    queryClient.setQueryData<RegisterData>(["assignData"], (oldData) => {
      return mergeRegisterData(oldData, { title });
    });
  };

  const mergeCategory = (item: Category) => {
    queryClient.setQueryData<RegisterData>(queryKeys.registerData(), (oldData) => {
      return mergeRegisterData(oldData, { category: item });
    });
  };

  const mergeDescription = (description: string) => {
    queryClient.setQueryData<RegisterData>(queryKeys.registerData(), (oldData) => {
      return mergeRegisterData(oldData, { description });
    });
  };

  const mergePrice = (priceString: string) => {
    queryClient.setQueryData<RegisterData>(queryKeys.registerData(), (oldData) => {
      return mergeRegisterData(oldData, { price: Number(priceString) });
    });
  };

  const mergeAddress = (address: string) => {
    queryClient.setQueryData<RegisterData>(queryKeys.registerData(), (oldData) => {
      return mergeRegisterData(oldData, { address });
    });
  };

  const mergeBannerImage = (imageUrl: string) => {
    queryClient.setQueryData<RegisterData>(queryKeys.registerData(), (oldData) => {
      return mergeRegisterData(oldData, { bannerImageUrl: imageUrl });
    });
  };

  const deleteBannerImage = () => {
    queryClient.setQueryData<RegisterData>(queryKeys.registerData(), (oldData) => {
      return mergeRegisterData(oldData, { bannerImageUrl: undefined });
    });
  };

  const mergeIntroImage = (imageUrls: string[]) => {
    queryClient.setQueryData<RegisterData>(queryKeys.registerData(), (oldData) => {
      return mergeRegisterData(oldData, {
        subImageUrls: imageUrls,
      });
    });
  };

  const resetIntroImage = (imageUrls: string[]) => {
    queryClient.setQueryData<RegisterData>(queryKeys.registerData(), (oldData) => {
      return mergeRegisterData(oldData, { subImageUrls: imageUrls });
    });
  };

  const mergeDate = (date: string) => {
    queryClient.setQueryData(queryKeys.registerDate(), date);
  };

  const mergeStartTime = (time: string) => {
    queryClient.setQueryData(queryKeys.registerStartTime(), time);
  };

  const mergeEndTime = (time: string) => {
    queryClient.setQueryData(queryKeys.registerEndTime(), time);
  };

  const mergeSchedule = (schedule: Schedule) => {
    queryClient.setQueryData<RegisterData>(queryKeys.registerData(), (oldData) => {
      return mergeRegisterData(oldData, {
        schedules: [...(oldData?.schedules || []), schedule],
      });
    });
  };

  const resetSchedule = (schedules: Schedule[]) => {
    queryClient.setQueryData<RegisterData>(queryKeys.registerData(), (oldData) => {
      return mergeRegisterData(oldData, { schedules });
    });
  };

  const initialTimes = () => {
    queryClient.setQueryData(queryKeys.registerDate(), "");
    queryClient.setQueryData(queryKeys.registerStartTime(), "");
    queryClient.setQueryData(queryKeys.registerEndTime(), "");
  };

  const initialAssignData = () => {
    queryClient.setQueryData(queryKeys.registerData(), null);
  };

  return {
    mergeTitle,
    mergeCategory,
    mergeDescription,
    mergePrice,
    mergeAddress,
    mergeBannerImage,
    deleteBannerImage,
    mergeIntroImage,
    resetIntroImage,
    mergeDate,
    mergeStartTime,
    mergeEndTime,
    mergeSchedule,
    initialTimes,
    initialAssignData,
    resetSchedule,
  };
};

export default useMergeRegisterData;