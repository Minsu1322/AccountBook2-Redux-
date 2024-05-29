import { configureStore } from "@reduxjs/toolkit";
import listSlice from "../slices/listSlice";
import monthSlice from "../slices/monthSlice";

const store = configureStore({
  reducer: {
    list: listSlice,
    month: monthSlice,
  },
});

export default store;
