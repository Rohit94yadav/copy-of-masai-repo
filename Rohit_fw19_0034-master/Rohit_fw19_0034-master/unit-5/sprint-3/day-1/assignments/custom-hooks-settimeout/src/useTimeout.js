import { useEffect, useState } from "react";

const useTimeout = (delay = 1000) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setShowText(true);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay]);
  return showText;
};

export default useTimeout;
