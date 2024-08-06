import axiosInstance from "@/lib/axiosinstance";
import { ModifyData } from "@/types/modifyActivity";

const patchModifyMyActivity = async (myActivity: ModifyData, id: string) => {
  try {
    const res = await axiosInstance.patch(`/my-activities/${Number(id)}`, myActivity);
    return res.data;
  } catch (e) {
    console.error("Error: ", e);
    throw e;
  }
};

export default patchModifyMyActivity;