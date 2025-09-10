import { auth } from "@/lib/auth";
import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { signOut } from "firebase/auth";
import { USE_AUTH_QUERY_KEY } from "./keys";

const mutationFn = async () => {
  const response = await signOut(auth);
  return response;
};

const useSignout = (): UseMutationResult<void, Error, void> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USE_AUTH_QUERY_KEY] });
    },
  });
};

export { useSignout };
