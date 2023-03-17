const redux = require("redux");

// the reducer is a function that takes the current state and an action and returns a new state
// same input always returns same output
const counterReducer = (state = { counter: 0 }, action) => {
  // state is object with counter property, default value is 0
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

// the reducer function is counterReducer thats muanipulates the data
const store = redux.createStore(counterReducer); // create store with reducer and optional preloadedState and enhancer (middleware)

// the store has a method called dispatch that takes an action
const counterSubscriber = () => {
  const latestState = store.getState(); // giving the latest state of the store after the state has been updated
  console.log(latestState);
};

// the store has a method called subscribe that takes a pointer to function that will be executed whenever the state is updated
store.subscribe(counterSubscriber); // subscribe to the store

store.dispatch({ type: "increment" }); // dispatch an action
store.dispatch({ type: "decrement" });
