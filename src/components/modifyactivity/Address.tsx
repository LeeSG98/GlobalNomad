import React, { useState, useEffect } from "react";
import useMergeModifyData from "@/hooks/useMergeModifyData";

interface ModifyAddressProps {
  address: string;
}

const Address = ({ address }: ModifyAddressProps) => {
  const { mergeAddress } = useMergeModifyData();
  const [localAddress, setLocalAddress] = useState(address);

  useEffect(() => {
    mergeAddress(address);
  }, []);

  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAddress = e.target.value;
    setLocalAddress(newAddress);
    mergeAddress(newAddress);
  };

  return (
    <div className="flex flex-col mt-[1.5rem]">
      <div className="text-[1.5rem] font-bold">주소</div>
      <input value={localAddress} className="w-[49.5rem] h-[3.5rem] mt-[1rem] py-[0.938rem] pl-[1rem] items-center border-[1px] border-gray_79 rounded" type="text" placeholder="주소를 입력해 주세요" onChange={handleChangeAddress} />
    </div>
  );
};

export default Address;