import { FieldErrors, FieldValues } from "react-hook-form";

function useExtractValidationMessages<T extends FieldValues>(
  errors: FieldErrors<T>,
) {
  const validation: Record<keyof T, string> = {} as Record<keyof T, string>;

  Object.entries(errors).forEach(([field, error]) => {
    if (error?.message) {
      validation[field as keyof T] = error.message as string;
    }
  });

  return validation;
}

export default useExtractValidationMessages;
