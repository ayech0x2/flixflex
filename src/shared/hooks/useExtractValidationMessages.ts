import { FieldErrors } from "react-hook-form";

function useExtractValidationMessages(errors: FieldErrors) {
  return Object.entries(errors).reduce((acc, [key, error]) => {
    if (error?.message) {
      acc[key] = error.message;
    }
    return acc;
  }, {} as Record<string, string>);
}

export default useExtractValidationMessages;