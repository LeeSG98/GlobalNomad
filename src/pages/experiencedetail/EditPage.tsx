import React, { useState } from 'react';
import { useRouter } from 'next/router';

const EditPage: React.FC = () => {
  const router = useRouter();
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [reviewCount, setReviewCount] = useState(0);
  const [rating, setRating] = useState(0);
  const [images, setImages] = useState<File[]>([]);

  const handleSave = () => {
    // 저장 로직 구현
    console.log({ category, title, address, reviewCount, rating, images });
    // 여기에 API 호출 등을 통해 데이터를 저장하는 로직을 추가하세요.
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setImages((prevImages) => [...prevImages, ...filesArray]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="w-full max-w-[600px] mx-auto mt-16 mb-80">
      <h1 className="font-bold text-2xl mb-4">경험 수정하기</h1>
      <div className="mb-4">
        <label className="block text-gray-700">카테고리</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">제목</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">주소</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700">이미지 업로드</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="mb-4 grid grid-cols-2 gap-2">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={URL.createObjectURL(image)}
              alt={`preview-${index}`}
              className="w-full h-32 object-cover rounded"
            />
            <button
              onClick={() => handleRemoveImage(index)}
              className="absolute top-0 right-0 mt-1 mr-1 text-white bg-red-500 rounded-full w-6 h-6 flex items-center justify-center"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <div className="flex space-x-4">
        <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          저장
        </button>
        <button onClick={handleCancel} className="px-4 py-2 bg-gray-500 text-white rounded-lg">
          취소
        </button>
      </div>
    </div>
  );
};

export default EditPage;
