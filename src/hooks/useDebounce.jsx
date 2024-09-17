import { useEffect, useState } from "react";

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(
      () => {
        const t = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
  
        return () => {
          clearTimeout(t);
        };
      },
      [value, delay] 
    );
    return debouncedValue;
  }
  
  export default useDebounce;