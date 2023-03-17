import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false, // we are using this to check if the cart has changed, so we can show the notification
  },
  // WE NEVER RUN SIDE EFFECTS AND ASYNC CODE IN REDUCERS //
  reducers: {
    // reducers are functions that will be executed when a certain action is dispatched
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload; // newItem is an object with id, price, title, payload is the object we passed in the dispatch function
      const existingItem = state.items.find((item) => item.id === newItem.id); // find() is a built-in array method that will return the first item that matches the condition
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          // push() is a built-in array method that will add an item to the end of the array
          id: newItem.id,
          name: newItem.title, // we are using name instead of title because we are using the same reducer for the cart and the orders
          price: newItem.price,
          quantity: 1, // we are adding a new item to the cart, so the quantity is 1
          totalPrice: newItem.price,
        });
      } else {
        // if the item already exists in the cart, we just need to update the quantity and the total price
        // we cant do it in redux by itseelf, we need to use redux toolkit
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
      state.totalQuantity++; // we are adding a new item to the cart, so we need to increase the total quantity
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id); // create a new array with all the items that dont match the id -> remove the item with the id
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.totalQuantity--; // we are removing an item from the cart, so we need to decrease the total quantity
    },
  },
});

export default cartSlice;
export const cartActions = cartSlice.actions;
