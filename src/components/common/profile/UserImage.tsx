import React, { useState } from "react";
import axiosInstance from "@/lib/axiosinstance";
import { FaRegUser } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi2";

interface UserImageProps {
  initialSrc?: string;
}

const UserImage: React.FC<UserImageProps> = ({ initialSrc }) => {
  const [src, setSrc] = useState<string | undefined>(initialSrc);
  const [file, setFile] = useState<File | null>(null);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onload = () => setSrc(reader.result as string);
      reader.readAsDataURL(file);

      await handleUpload(file);
    }
  };

  const handleUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axiosInstance.post("/users/me/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error("에러 발생", error);
    }
  };

  return (
    <div className="relative">
      {src ? (
        <img
          src={src}
          alt="유저이미지"
          className="h-[160px] w-[160px] rounded-full shadow"
        />
      ) : (
        <div className="flex h-[160px] w-[160px] items-center justify-center rounded-full bg-gray-200 shadow">
          <FaRegUser className="text-6xl text-gray-400" />
        </div>
      )}
      <label
        htmlFor="imageUpload"
        className="absolute bottom-0 right-2 flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-green_0B"
      >
        <HiOutlinePencil className="text-white" />
        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default UserImage;

// import React, { useState, ChangeEvent } from "react";
// import { FaRegUser } from "react-icons/fa";
// import { HiOutlinePencil } from "react-icons/hi2";
// import axiosInstance from "@/lib/axiosinstance";

// interface UserImageProps {
//   imageSrc?: string;
// }

// export default function UserImage({ imageSrc }: UserImageProps) {
//   const [src, setSrc] = useState<string | undefined>(imageSrc);
//   const [file, setFile] = useState<File | null>(null);

//   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setFile(file);
//       const reader = new FileReader();
//       reader.onload = () => setSrc(reader.result as string);
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="relative">
//       {src ? (
//         <img
//           src={src}
//           alt="유저이미지"
//           className="h-[160px] w-[160px] rounded-full shadow"
//         />
//       ) : (
//         <div className="flex h-[160px] w-[160px] items-center justify-center rounded-full bg-gray-200 shadow">
//           <FaRegUser className="text-6xl text-gray-400" />
//         </div>
//       )}
//       <label
//         htmlFor="imageUpload"
//         className="absolute bottom-0 right-2 flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-green_0B"
//       >
//         <HiOutlinePencil className="text-white" />
//         <input
//           id="imageUpload"
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           className="hidden"
//         />
//       </label>
//     </div>
//   );
// }
