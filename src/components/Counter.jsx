import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/slices/counterSlice";
const Counter = () => {
  const { value } = useSelector((state) => state.counterSlice);
  const dispatch = useDispatch();

  const hendlerincrement = () => {
    dispatch(increment());
  };
  const hendlerdecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h2>Counter</h2>
      <p>counter: {value}</p>
      <button onClick={hendlerincrement}>increment</button>
      <button onClick={hendlerdecrement}>decrement</button>
    </div>
  );
};

export default Counter;
