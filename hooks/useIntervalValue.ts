import { useState } from 'react';

import useInterval from './useInterval';

const useIntervalValue = (callback: any, delay: number) => {
  const [result, setResult] = useState(callback());

  useInterval(() => {
    const newResult = callback();
    if (newResult !== result) setResult(newResult);
  }, delay);

  return result;
};

export default useIntervalValue;
