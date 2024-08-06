import React, { useState, useEffect } from "react";
import useMergeModifyData from "@/hooks/useMergeModifyData";

interface ModifyDescriptionProps {
  description: string;
}

const Description = ({ description }: ModifyDescriptionProps) => {
  const { mergeDescription } = useMergeModifyData();
  const [localDescription, setLocalDescription] = useState(description);

  useEffect(() => {
    mergeDescription(description);
  }, []);

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDescription = e.target.value;
    setLocalDescription(newDescription);
    mergeDescription(newDescription);
  };

  return (
    <div className="flex mt-[1.5rem]">
      <input value={localDescription} className="w-[49.5rem] h-[21.625rem] pt-[1rem] pb-[19rem] pl-[1rem] border-[1px] border-gray_79 rounded" type="text" placeholder="설명" onChange={handleChangeDescription} />
    </div>
  );
};

export default Description;
