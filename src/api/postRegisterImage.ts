import axios from "axios";
import axiosInstance from "@/lib/axiosinstance";

const postAssignImage = async (assignImage: FormData) => {
  try {
    const res = await axiosInstance.post("/activities/image", assignImage, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (e) {
    console.error("Error: ", e);
    if (axios.isAxiosError(e)) {
      if (e.message === "Network Error") {
        console.error("이미지 업로드에 실패했습니다. 파일 크기를 확인하세요.");
      } else console.error(e.message);
    }
    return null;
  }
};

export default postAssignImage;