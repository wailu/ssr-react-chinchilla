import { useEffect, useState } from "react";

const Duck = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      console.log("hi from duck");
      setCount((count) => count + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-80 bg-red-200">
      This is the duck component. count: {count}
    </div>
  );
};

export default Duck;
