import { useEffect } from "react";

const Duck = () => {
  useEffect(() => {
    console.log("hi from duck");
  });

  return <div>This is the duck component</div>;
};

export default Duck;
