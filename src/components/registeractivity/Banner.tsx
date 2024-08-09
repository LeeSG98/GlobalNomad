import React, { useState, useRef } from "react";
import Image from "next/image";
import postRegisterImage from "@/api/postRegisterImage";
import useMergeRegisterData from "@/hooks/useMergeRegisterData";
import AddImage from "/public/add-image.png";
import DeleteButton from "/public/delete.png";

const Banner = () => {
  const { mergeBannerImage, deleteBannerImage } = useMergeRegisterData();
  const [bannerImage, setBannerImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleBannerImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append("image", file);
        const response = await postRegisterImage(formData);
        if (response && response.activityImageUrl) {
          const imageUrl = response.activityImageUrl;
          setBannerImage(imageUrl);
          mergeBannerImage(imageUrl);
        }
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleRemoveImage = () => {
    setBannerImage(null);
    deleteBannerImage();
  };

  return (
    <div className="flex w-[100%] mt-6 flex-col items-start gap-6">
      <span className="text-black text-2xl font-bold">
        배너 이미지
      </span>
      <div className="grid w-[100%] grid-flow-row auto-rows-[minmax(0,2fr)] grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6">
        <div>
          <label
            className="flex flex-col items-center justify-center cursor-pointer"
            htmlFor="bannerImageInput"
          >
            <Image src={AddImage} className="w-45 h-45" alt="plusIcon" />
          </label>
          <input
            ref={inputRef}
            id="bannerImageInput"
            type="file"
            accept="image/jpeg, image/png"
            style={{ display: "none" }}
            onChange={handleBannerImageUpload}
          />
        </div>
        {/* 배너 이미지 띄우기 */}
        {bannerImage && (
          <div
            className="relative rounded-xl bg-no-repeat bg-contain bg-center"
            style={{
              backgroundImage: `url(${bannerImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              className="absolute h-10 w-10 top-[-10px] right-[-10px] cursor-pointer"
              src={DeleteButton}
              alt="whiteXBtn"
              onClick={handleRemoveImage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;