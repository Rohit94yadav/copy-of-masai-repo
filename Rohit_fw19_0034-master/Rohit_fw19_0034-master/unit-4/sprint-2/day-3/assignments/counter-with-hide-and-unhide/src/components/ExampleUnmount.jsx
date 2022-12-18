import { useEffect, useState } from "react";

function ExampleUnmount() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);
    const cleanup = () => {
      clearInterval(id);
    };
    return cleanup;
  }, []);

  return (
    <div>
      <h3>count: {counter}</h3>
    </div>
  );
}

export default ExampleUnmount;
