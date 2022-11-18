import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      //   console.log('debounceValue : ' + debounceValue);
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, debounceValue]);
  return debounceValue;
}

export default useDebounce;
