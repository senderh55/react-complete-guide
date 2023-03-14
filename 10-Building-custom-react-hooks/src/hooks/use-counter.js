import { useState, useEffect } from "react";

// a custom hook must start with use
const useCounter = (fowards = true) => {
  // default value is true
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + (fowards ? 1 : -1));
    }, 1000);

    return () => clearInterval(interval);
  }, [fowards]); // only re-run the effect if fowards changes

  return counter;
};

export default useCounter;
