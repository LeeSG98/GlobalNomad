import React, { useState, useRef } from 'react';
import Image from "next/image";
import AddImage from "/public/add-image.png";
import DeleteMark from "/public/delete.png";

const MAX_SIZE = 4;

const Intro = () => {
  const [introImage, setIntroImage] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIntroImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {

    }
  };

  const handleRemoveImage = (index: number): void => {

  };

  return (
    <>
      <div className="mt-[1.5rem] text-[1.5rem] font-bold text-black">
        소개 이미지
      </div>
      <label htmlFor="introImageInput" className="w-[11.25rem] cursor-pointer">
        <Image src={AddImage} alt="이미지 추가" className="mt-[1.5rem] w-[11.25rem] h-[11.25rem]"/>
        <input id="introImageInput" type="file" accept="image/jpeg, image/png" style={{ display: 'none' }} onChange={handleIntroImageUpload}/>
      </label>
      {introImage &&
        introImage.map((image, index) => (
          <div
            key={image}
            className="relative rounded-xl bg-no-repeat bg-contain bg-center"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '100%',
          }}
          >
            <Image src={DeleteMark} alt="지우기" className="absolute cursor-pointer" onClick={() => handleRemoveImage(index)}/>
          </div>
      ))}
      <span className="mt-[1.5rem] mb-[21.5rem] text-[1.125rem] text-gray_4B">*이미지는 최대 4개까지 등록 가능합니다.</span>
    </>
  );
};

export default Intro;