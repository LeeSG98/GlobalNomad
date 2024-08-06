import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ModifyData, Schedule } from "@/types/modifyActivity";
import patchModifyMyActivity from "@/api/patchMyActivity";
import queryKeys from "@/api/reactQuery/queryKeys";
import useMergeModifyData from "@/hooks/useMergeModifyData";

interface MutationModifyDataProps {
  schedules: Schedule[];
}

const useMutationModifyData = ({ schedules }: MutationModifyDataProps) => {
  const queryClient = useQueryClient();
  // const navigate = useNavigate();
  const { mergeSchedule, initialModifySchedule, initialScheduleId, initialModifyData } =
    useMergeModifyData();

  const modifyMutation = useMutation({
    mutationFn: async ({ data: modifyData, id: modifyId }: { data: ModifyData; id: string }) => {
      return patchModifyMyActivity(modifyData, modifyId);
    },
    onSuccess: () => {
      console.log("수정 성공!!");
      queryClient.invalidateQueries({ queryKey: queryKeys.activities() });
      queryClient.invalidateQueries({ queryKey: ["currentPageActivity"] });
      initialModifyData();
      // navigate("/myactivity");
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message;
        console.error(errorMessage);
        mergeSchedule(schedules);
        initialModifySchedule();
        initialScheduleId();
      } else {
        console.error("수정 중 오류가 발생했습니다.");
      }
    },
  });

  return { modifyMutation };
};

export default useMutationModifyData;