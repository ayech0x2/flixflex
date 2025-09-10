import { auth } from "@/lib/auth";
import { store } from "@/lib/jotai";
import { userAtom } from "@/shared/atoms";
import { USE_AUTH_QUERY_KEY } from "@/shared/services/keys";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { onAuthStateChanged, User } from "firebase/auth";

const queryFn = async () => {
  return new Promise<User>((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);
        store.set(userAtom, user);
      } else {
        store.set(userAtom, null);
        reject();
      }
    });
  });
};

const useAuth = (): UseQueryResult<User, Error> => {
  return useQuery<User, Error>({
    queryFn,
    queryKey: [USE_AUTH_QUERY_KEY],
  });
};

export { useAuth };
