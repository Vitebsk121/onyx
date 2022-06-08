// import "./AutoCounter.scss";

import React, { useEffect, useState } from 'react';

type AutoCounterProps = {
  defaultCount: number;
  durationMS: number;
};

const AutoCounter: React.FC<AutoCounterProps> = ({
  defaultCount,
  durationMS,
}: AutoCounterProps) => {
  const [count, setCount] = useState(0);
  const defaultDelay = 10;
  const divider = durationMS / defaultDelay;

  function format(value: number) {
    return new Intl.NumberFormat('ru-RU').format(value);
  }

  useEffect(() => {
    const progressCount = () => {
      if (count >= defaultCount) {
        setCount(defaultCount);
        clearInterval(counterInterval);
      } else {
        setCount((prev) => Math.ceil(prev + defaultCount / divider));
      }
    };

    const counterInterval = setInterval(progressCount, defaultDelay);

    return () => {
      clearInterval(counterInterval);
    };
  }, [count, defaultCount, divider]);

  return <>{format(count)}</>;
};

export default AutoCounter;
