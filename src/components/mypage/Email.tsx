import getUserInfo from "@/api/getUserInfo";
import { useEffect, useState } from "react";

export default function Email() {
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await getUserInfo();
        setEmail(userInfo.email);
      } catch (e) {
        console.log("Error: ", e);
      }
    };
    fetchUserInfo();
  }, []);
  return (
    <>
      <div className="flex flex-col gap-[16px]">
        <h2 className="text-xl font-bold">이메일</h2>
        <div className="flex h-[55px] items-center rounded border border-black bg-white px-[16px] py-[8px]">
          {email}
        </div>
      </div>
    </>
  );
}
