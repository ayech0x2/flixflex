import { auth } from "@/lib/auth";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { SigninInput } from "../types";
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";

const mutationFn = async (signinInput: SigninInput) => {
  const response = await signInWithEmailAndPassword(
    auth,
    signinInput.email,
    signinInput.password,
  );
  return response.user;
};

const useSignin = (): UseMutationResult<
  UserCredential["user"],
  Error,
  SigninInput
> => {
  return useMutation({
    mutationFn,
  });
};

export { useSignin };
