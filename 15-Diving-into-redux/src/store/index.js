import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

const store = configureStore({
  // we call configutreStore only once, and we pass an object with a reducer property
  // reducer is a function that determines changes to an application's state
  reducer: { counter: counterReducer, auth: authReducer }, // we pass an object with a key-value pair, where the key is the name of the slice and the value is the reducer function
  // counterSlice.reducer and not counterSlice.reducers because createSlice generates a reducer function for us automatically and we can access it via the reducer property
});

export default store;

/* Using Redux without tollkit: const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1, // always return a new state and never mutate the old state
      showCounter: state.showCounter, // showCounter is not changed
      // becouse we overwrite the state, we need to copy the old state and overwrite the properties we want to change
    };
  }
  if (action.type === "increase") {
    // prevent hardcoding -> use action.amount (payload), amount can be any name
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter, // toggle showCounter
      counter: state.counter, // counter is not changed
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
*/
