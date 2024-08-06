import React, { useState, useEffect } from "react";
import useMergeModifyData from "@/hooks/useMergeModifyData";

interface ModifyTitleProps {
  title: string;
}

const Title = ({ title }: ModifyTitleProps) => {
  const { mergeTitle } = useMergeModifyData();
  const [localTitle, setLocalTitle] = useState(title);

  useEffect(() => {
    mergeTitle(title);
  }, []);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setLocalTitle(newTitle);
    mergeTitle(newTitle);
  };

  return (
    <div className="flex mt-[1.5rem]">
      <input value={localTitle} onChange={handleChangeTitle} className="w-[49.5rem] h-[3.5rem] py-[0.938rem] pl-[1rem] items-center border-[1px] border-gray_79 rounded" type="text" placeholder="제목" />
    </div>
  );
};

export default Title;
