import { configureStore } from "@reduxjs/toolkit";
import listSlice from "../slices/listSlice";
import monthSlice from "../slices/monthSlice";
import authSlice from "../slices/authSlice";

const store = configureStore({
  reducer: {
    list: listSlice,
    month: monthSlice,
    auth: authSlice,
  },
});

export default store;
