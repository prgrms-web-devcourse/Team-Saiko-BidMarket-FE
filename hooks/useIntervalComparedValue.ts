import { useState } from 'react';

import useInterval from './useInterval';

const useIntervalComparedValue = (callback: any, delay: number) => {
  const [result, setResult] = useState(callback());

  useInterval(() => {
    const newResult = callback();
    if (newResult !== result) setResult(newResult);
  }, delay);

  return result;
};

export default useIntervalComparedValue;
