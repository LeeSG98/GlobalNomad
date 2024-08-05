import { useQueryClient, useMutation } from "@tanstack/react-query";
import { RegisterData } from "@/types/registerActivity";
import postRegisterActivity from "@/api/postActivity";
import queryKeys from "@/api/reactQuery/queryKeys";
import useMergeRegisterData from "@/hooks/useMergeRegisterData";

const useMutationRegisterData = () => {
  const queryClient = useQueryClient();
  const { initialRegisterData } = useMergeRegisterData();
  const registerMutation = useMutation({
    mutationFn: async (registerData: RegisterData) => {
      return postRegisterActivity(registerData);
    },
    onSuccess: () => {
      console.log("등록 성공!")
      initialRegisterData();
      queryClient.invalidateQueries({ queryKey: queryKeys.activities() });
      queryClient.invalidateQueries({ queryKey: [" "] });
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });

  return { registerMutation };
};

export default useMutationRegisterData;