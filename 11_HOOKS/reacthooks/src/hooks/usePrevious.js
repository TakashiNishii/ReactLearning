import { useEffect, useRef, useDebugValue } from "react";

export const usePrevious = (value) => {
  const ref = useRef();

  useDebugValue("---- Custom Hooks E useDebugValue ----");
  useDebugValue("O número anterior é: " + value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};
