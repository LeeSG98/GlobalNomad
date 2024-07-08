import Profile from "@/components/common/profile/Profile";
import Title from '@/components/registeractivity/Title';
import Input from '@/components/registeractivity/Input';
import Category from '@/components/registeractivity/Category';
import Explanation from "@/components/registeractivity/Explanation";
import Price from "@/components/registeractivity/Price";
import Address from "@/components/registeractivity/Address";
import Reserve from "@/components/registeractivity/Reserve";

const registeractivity = () => {
  return (
    <>
      <div className="flex justify-center gap-[24px] pt-[72px]">
        <Profile />
        <div className="flex w-[792px] flex-col">
          <Title />
          <Input />
          <Category />
          <Explanation />
          <Price />
          <Address />
          <Reserve />
        </div>
      </div>
    </>
  );
};

export default registeractivity;