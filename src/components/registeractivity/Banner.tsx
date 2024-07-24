import React, { useState, useRef } from 'react';
import Image from "next/image";
import AddImage from "/public/add-image.png";
import DeleteMark from "/public/delete.png";

const Banner = () => {
  const [bannerImage, setBannerImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleBannerImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onload = () => setBannerImage(reader.result as string);
      reader.readAsDataURL(file);

      await handleUpload(file);
    }
  };

  const handleUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);
  }

  const handleRemoveImage = () => {
  };

  return (
    <>
      <div className="mt-[1.5rem] text-[1.5rem] font-bold text-black">
        배너 이미지
      </div>
      <label htmlFor="bannerImageInput" className="w-[11.25rem] cursor-pointer">
        <Image src={AddImage} alt="이미지 추가" className="mt-[1.5rem] w-[11.25rem] h-[11.25rem]"/>
        <input id="bannerImageInput" type="file" accept="image/jpeg, image/png" style={{ display: 'none' }} onChange={handleBannerImageUpload}/>
      </label>
      {bannerImage &&
        <div
          className="relative rounded-xl bg-no-repeat bg-contain bg-center"
          style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <Image src={DeleteMark} alt="지우기" className="absolute cursor-pointer w-[2.5rem] h-[2.5rem]" onClick={handleRemoveImage}/>
        </div>
      }
    </>
  );
};

export default Banner;