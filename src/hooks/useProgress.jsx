import { useState } from "react";

const useProgress = (initialValue = 0) => {
  const [progress, setProgress] = useState(initialValue);

  const increaseProgress = () => {
    setProgress((prev) => (prev + 10 > 100 ? 100 : prev + 10));
  };

  return { progress, increaseProgress };
};

export default useProgress;
