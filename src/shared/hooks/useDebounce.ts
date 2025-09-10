import * as React from "react";

function useDebounce(
  value: string | null,
  delay: number = 500,
  callback?: VoidFunction | undefined,
) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      if (value !== null) {
        setDebouncedValue(value);
        callback && callback();
      }
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, callback]);

  return debouncedValue;
}

export default useDebounce;
