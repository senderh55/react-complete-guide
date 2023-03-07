import CartContext from "./cart-context";
import { useReducer } from "react";

// this is the initial state of the cart
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// state is the current state snapshot, action is the action that we are dispatching
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // this is a way to check if the item already exists in the cart, return the index of the item if it exists
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // this is a way to check if the item already exists in the cart, return the item if it exists
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    // if the item already exists in the cart, we need to update the amount
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
      // if the item does not exist in the cart, we need to add it to the cart
    } else {
      updatedItems = state.items.concat(action.item); //concat return a new array with the new item added to the end
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  // if the action type is REMOVE, we need to remove the item from the cart
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    // if the amount of the item is 1, we need to remove the item from the cart
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      // if the amount of the item is greater than 1, we need to update the amount
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items]; // this is a way to create a copy of the array
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

// the goal of this component is to provide the context object to all components
const CartProvider = (props) => {
  // useReducer is a hook that allows us to manage state in a more complex way
  // it takes a reducer function and an initial state as arguments
  // it returns an array with two elements
  // the first element is the current state snapshot
  // the second element is a function that allows us to dispatch actions
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  // this is a custom function that we are creating to dispatch actions
  // we are passing the action object as an argument
  // the action object has a type property that is required
  // the action object can have any other properties that we want
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };

  // this is the context object that will be shared across components
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  // CartContext.Provider allows us to wrap any components that should have access to the context object
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
