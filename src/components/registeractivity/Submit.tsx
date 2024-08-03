import React from "react";
import { useQuery } from "@tanstack/react-query";
import { RegisterData } from "@/types/registerActivity";
import queryKeys from "@/api/reactQuery/queryKeys";
import useCheckAssignData from "@/hooks/useCheckRegisterData";
import useMutationAssignData from "@/hooks/useMutateRegisterData";

const Submit = () => {
  const { assignMutation } = useMutationAssignData();
  const { checkRequireData } = useCheckAssignData();
  const data = useQuery({ queryKey: queryKeys.registerData() }).data as RegisterData;

  const handleRegisterData = async () => {
    if (checkRequireData(data)) {
      assignMutation.mutate(data);
    }
  };

  return (
    <div className="w-[800px] flex justify-between pr-[8px]">
      <span className="font-bold text-[32px]">
        내 체험 등록
      </span>
      <button type="submit" onClick={handleRegisterData} className="flex w-[120px] h-[48px] px-[16px] py-[8px] gap-[4px] rounded justify-center items-center text-white font-bold bg-[#112211] text-[16px]">
        등록하기
      </button>
    </div>
  );
};

export default Submit;