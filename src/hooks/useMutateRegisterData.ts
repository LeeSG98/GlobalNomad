import { useQueryClient, useMutation } from "@tanstack/react-query";
import { RegisterData } from "@/types/registerActivity";
import postRegisterActivity from "@/api/postActivity";
import queryKeys from "@/api/reactQuery/queryKeys";
import useMergeRegisterData from "@/hooks/useMergeRegisterData";

const useMutationRegisterData = () => {
  const queryClient = useQueryClient();
  const { initialAssignData } = useMergeRegisterData();
  const assignMutation = useMutation({
    mutationFn: async (assignData: RegisterData) => {
      return postRegisterActivity(assignData);
    },
    onSuccess: () => {
      initialAssignData();
      queryClient.invalidateQueries({ queryKey: queryKeys.activities() });
      queryClient.invalidateQueries({ queryKey: [" "] });
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });

  return { assignMutation };
};

export default useMutationRegisterData;