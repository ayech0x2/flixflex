import { useSetAtom } from "jotai";
import { alertAtom } from "../atoms";
import { AlertPayload } from "../types";
import * as React from "react";

function useAlert() {
  const setAlert = useSetAtom(alertAtom);

  const dismiss = () => {
    setAlert(null);
  };

  const show = React.useCallback(
    (alert: AlertPayload) => {
      setAlert(alert);
    },
    [setAlert],
  );

  return { dismiss, show };
}

export default useAlert;
