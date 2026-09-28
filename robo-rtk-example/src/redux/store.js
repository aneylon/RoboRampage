import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Components/redux-counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
