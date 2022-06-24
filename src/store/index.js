import { createStore } from "redux";
//using reduxtoolkit which has an easier approach as said by maxim
import { createSlice } from "@reduxjs/toolkit";
//createSlice is used to create a slice of a state

//step-2 : create reducer
//Params list
// 1) current state
// 2) action
const storeReducer = (state = { counter: 0, showCounter: false }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  } else if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  } else if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  } else if (action.type === "showCounter") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }
  return state;
};

//step-1 : create a store
const store = createStore(storeReducer);

export default store;
