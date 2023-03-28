import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const incrementCounter = () => {
    dispatch({
      type: "increment",
    });
  };
  const decrementCounter = () => {
    dispatch({
      type: "decrement",
    });
  };
  const incrementCounterByValue = () => {
    dispatch({
      type: "incrementByValue",
      payload: 10,
    });
  };
  const decrementCounterByValue = () => {
    dispatch({
      type: "decrementByValue",
      payload: 10,
    });
  };
  return (
    <div>
      <button onClick={incrementCounter}>increment</button>
      <button onClick={incrementCounterByValue}>increment by 10</button>
      <h1>{count}</h1>
      <button onClick={decrementCounter}>decrement</button>
      <button onClick={decrementCounterByValue}>decrement by 10</button>
    </div>
  );
};

export default Counter;
