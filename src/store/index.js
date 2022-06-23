import { createStore } from "redux";
//step-2 : create reducer
//Params list
// 1) current state
// 2) action
const storeReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

//step-1 : create a store
const store = createStore(storeReducer);

export default store;
