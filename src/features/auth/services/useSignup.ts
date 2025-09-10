import { auth } from "@/lib/auth";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { SigninInput } from "../types";

const mutationFn = async (signinInput: SigninInput) => {
  const response = await createUserWithEmailAndPassword(
    auth,
    signinInput.email,
    signinInput.password,
  );
  return response.user;
};

const useSignup = (): UseMutationResult<
  UserCredential["user"],
  Error,
  SigninInput
> => {
  return useMutation({
    mutationFn,
  });
};

export { useSignup };
