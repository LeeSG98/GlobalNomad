import Profile from "@/components/common/profile/Profile";
import Title from '@/components/registeractivity/Title';
import Input from '@/components/registeractivity/Input';
import Category from '@/components/registeractivity/Category';
import Explanation from "@/components/registeractivity/Explanation";

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
        </div>
      </div>
    </>
  );
};

export default registeractivity;