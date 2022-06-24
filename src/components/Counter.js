import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  //useSelector to get state of anything
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  //useDispatch to change state of anything
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({ type: "showCounter" });
  };
  const incrementCounterHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementCounterHandler = () => {
    dispatch({ type: "decrement" });
  };
  const increaseCounterHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementCounterHandler}>increment</button>
        <button onClick={decrementCounterHandler}>decrement</button>
        <button onClick={increaseCounterHandler}>increase</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
