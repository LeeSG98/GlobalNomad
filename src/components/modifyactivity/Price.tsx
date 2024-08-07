import React, { useState, useEffect } from "react";
import useMergeModifyData from '@/hooks/useMergeModifyData';

interface ModifyPriceProps {
  price: number;
}

const Price = ({ price }: ModifyPriceProps) => {
  const { mergePriceNum, mergePriceStr } = useMergeModifyData();
  const [localPrice, setLocalPrice] = useState<number | string>(price);

  useEffect(() => {
    mergePriceNum(price);
  }, []);

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = e.target.value;
    setLocalPrice(newPrice);
    mergePriceStr(newPrice);
  };

  return (
    <div className="flex flex-col mt-[1.5rem]">
      <div className="text-[24px] font-bold">가격</div>
      <input value={localPrice} className="w-[49.5rem] h-[3.5rem] mt-[1rem] py-[0.938rem] pl-[1rem] border-[1px] border-gray_79 rounded" type="text" placeholder="가격" onChange={handleChangePrice} />
    </div>
  );
};

export default Price;