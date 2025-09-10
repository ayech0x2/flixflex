import * as React from "react";
import { FieldValues } from "react-hook-form";

function useFormError<T extends FieldValues>(
  validationErrors: Record<keyof T, string>,
  error: Error | null,
) {
  const { validationError, submissionError } = React.useMemo(() => {
    const validationError = Object.keys(validationErrors).length > 0;
    const submissionError = error;
    return { validationError, submissionError };
  }, [validationErrors, error]);

  return { validationError, submissionError };
}

export default useFormError;
