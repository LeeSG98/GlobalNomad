import Header from "@/components/header/header";
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
import Footer from "@/components/footer/footer";

const registeractivity = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center gap-[1.5rem] pt-[4.5rem] bg-gray_FA">
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
      <Footer />
    </>
  );
};

export default registeractivity;