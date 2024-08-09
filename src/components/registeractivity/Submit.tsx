import React from "react";
import { useQuery } from "@tanstack/react-query";
import { RegisterData } from "@/types/registerActivity";
import queryKeys from "@/api/reactQuery/queryKeys";
import useCheckRegisterData from "@/hooks/useCheckRegisterData";
import useMutationRegisterData from "@/hooks/useMutateRegisterData";

const Submit = () => {
  const { registerMutation } = useMutationRegisterData();
  const { checkRequireData } = useCheckRegisterData();
  const data = useQuery({ queryKey: queryKeys.registerData() })
    .data as RegisterData;

  const handleRegisterData = async () => {
    if (checkRequireData(data)) {
      registerMutation.mutate(data);
    }

    console.log(data);
  };

  return (
    <div className="flex w-[800px] justify-between pr-[8px]">
      <span className="text-[32px] font-bold">내 체험 등록</span>
      <button
        type="submit"
        onClick={handleRegisterData}
        className="flex h-[48px] w-[120px] items-center justify-center gap-[4px] rounded bg-[#112211] px-[16px] py-[8px] text-[16px] font-bold text-white"
      >
        등록하기
      </button>
    </div>
  );
};

export default Submit;
