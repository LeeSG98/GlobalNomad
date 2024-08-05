import axiosInstance from "@/lib/axiosinstance";
import { RegisterData } from "@/types/registerActivity";

const postRegisterActivity = async (myActivity: RegisterData) => {
  try {
    const res = await axiosInstance.post("/activities", myActivity);
    return res.data;
  } catch (e) {
    console.error("Error: ", e);
    return null;
  }
};

export default postRegisterActivity;