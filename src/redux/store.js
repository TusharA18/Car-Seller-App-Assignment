import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./page/pageSlice";

export const store = configureStore({
   reducer: { page: pageSlice },
});
