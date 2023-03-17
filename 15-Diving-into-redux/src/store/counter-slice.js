import { createSlice } from "@reduxjs/toolkit";
// redux logic in store folder (index.js)
// Working with Multiple State Properties
const initialCounetrState = { counter: 0, showCounter: true };
// createSlice provides a function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state
const counterSlice = createSlice({
  name: "counter", // name of the slice
  initialState: initialCounetrState, // initial state
  reducers: {
    // reducers are functions that are responsible for determining how the state should change in response to actions sent to the store
    // we dont need actions arguments anymore, becouse createSlice generates action creators and action types that correspond to the reducers and state
    increment(state) {
      state.counter++; // when using createSlice, we can mutate the state directly
    },
    decrement(state) {
      state.counter--;
    },
    // we need extra argument for payload, so here we need to use the action argument
    increase(state, action) {
      state.counter = state.counter + action.payload; // payload is the amount
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
export const counterActions = counterSlice.actions; // we can access the action creators via the actions property -> we import this in the Counter.js component
export default counterSlice.reducer; // we export the reducer function, becouse we need to pass it to the configureStore function
