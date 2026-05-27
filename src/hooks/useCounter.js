// import { useState } from "react";

// const useCounter = (initialValue = 0) => {
//   const [count, setCount] = useState(initialValue);
//   const increase = () => {
//     setCount(count + 1);
//   };
//   const decrease = () => {
//     setCount(count - 1);
//   };
//   const reset = () => {
//     setCount(initialValue);
//   };

//   return { count, increase, decrease, reset };
// };

// export default useCounter;

import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const useCounter = () => {
  return useContext(CounterContext);
};

export default useCounter;
