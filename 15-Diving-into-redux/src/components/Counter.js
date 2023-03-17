import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter-slice";

const Counter = () => {
  const dispatch = useDispatch(); // useDispatch is a hook that allows us to dispatch actions to the Redux store
  const counter = useSelector((state) => state.counter.counter); // useSelector is a hook that allows us to extract data from the Redux store
  // the first counter is the name of the slice, the second counter is the name of the property in the slice (counter: counterSlice.reducer)
  const show = useSelector((state) => state.counter.showCounter);
  // when using useSelector, react will automatically subscribe to the store and re-render the component whenever the state changes
  const incrementHandler = () => {
    dispatch(counterActions.increment()); // dispatch is a function that allows us to dispatch actions to the Redux store
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // {type: 'counter/increase', payload: 5}
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
