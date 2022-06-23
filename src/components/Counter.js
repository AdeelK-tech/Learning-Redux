import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};
  const incrementCounterHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementCounterHandler = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementCounterHandler}>increment</button>
        <button onClick={decrementCounterHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
