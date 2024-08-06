import Profile from "@/components/common/profile/Profile";
import Title from "@/components/registeractivity/Title";
import Submit from "@/components/registeractivity/Submit";
import Category from "@/components/registeractivity/Category";
import Description from "@/components/registeractivity/Description";
import Price from "@/components/registeractivity/Price";
import Address from "@/components/registeractivity/Address";
import Reserve from "@/components/registeractivity/Reserve";
import Banner from "@/components/registeractivity/Banner";
import Intro from "@/components/registeractivity/Intro";

const registeractivity = () => {
  return (
    <>
      <div className="flex justify-center gap-[1.5rem] bg-gray_FA pt-[4.5rem]">
        <Profile />
        <div className="flex w-[49.5rem] flex-col">
          <Submit />
          <Title />
          <Category />
          <Description />
          <Price />
          <Address />
          <Reserve />
          <Banner />
          <Intro />
        </div>
      </div>
    </>
  );
};

export default registeractivity;
