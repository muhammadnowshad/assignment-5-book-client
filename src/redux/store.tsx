import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./features/counter/counterSlice";


const store = configureStore({
  reducer: {
    counter: CounterSlice,
  },
    middleware: (getDefaultMiddleWares) => getDefaultMiddleWares().concat()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;