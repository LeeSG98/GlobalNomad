import React, { useState, useRef } from "react";
import Image from "next/image";
import postRegisterImage from "@/api/postRegisterImage";
import useMergeRegisterData from "@/hooks/useMergeRegisterData";
import AddImage from "/public/add-image.png";
import DeleteButton from "/public/delete.png";

const MAX_SIZE = 4;

const Intro = () => {
  const { mergeIntroImage, resetIntroImage } = useMergeRegisterData();
  const [introImage, setIntroImage] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIntroImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (introImage?.length === MAX_SIZE) {
      console.error("소개 이미지는 최대 4개까지 등록 가능합니다.");
      if (inputRef.current) {
        inputRef.current.value = "";
      }
      return;
    }
    const file = e.target.files?.[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append("image", file);
        const response = await postRegisterImage(formData);
        if (response && response.activityImageUrl) {
          const imageUrl = response.activityImageUrl;

          setIntroImage((prevImages) => {
            const updatedImages = [...prevImages, imageUrl];
            mergeIntroImage(updatedImages);
            return updatedImages;
          });
        }

        if (inputRef.current) {
          inputRef.current.value = "";
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleRemoveImage = (index: number): void => {
    setIntroImage((prevImages: string[]) => {
      const updatedImages = prevImages.filter((_: string, i: number) => i !== index);
      resetIntroImage(updatedImages);
      return updatedImages;
    });
  };

  return (
    <div className="flex w-[100%] mt-6 mb-[306px] flex-col items-start gap-6">
      <span className="text-black text-2xl font-bold">
        소개 이미지
      </span>
      <div className="grid w-[100%] grid-flow-row auto-rows-[minmax(0,2fr)] grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6">
        <div>
          <label
            className="flex flex-col items-center justify-center cursor-pointer"
            htmlFor="introImageInput"
          >
            <Image src={AddImage} alt="plusIcon" />
          </label>
          <input
            ref={inputRef}
            id="introImageInput"
            type="file"
            accept="image/jpeg, image/png"
            style={{ display: "none" }}
            onChange={handleIntroImageUpload}
          />
        </div>
        {/* 내 이미지 띄우기 */}
        {introImage &&
          introImage.map((image, index) => (
            <div
              key={image}
              className="relative rounded-xl bg-no-repeat bg-contain bg-center"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                className="absolute w-10 h-10 top-[-10px] right-[-10px] cursor-pointer"
                src={DeleteButton}
                alt="whiteXBtn"
                onClick={() => handleRemoveImage(index)}
              />
            </div>
          ))}
      </div>
      <span className="text-gray_4B text-lg">
          *이미지는 최대 4개까지 등록 가능합니다.
      </span>
    </div>
  );
};

export default Intro;