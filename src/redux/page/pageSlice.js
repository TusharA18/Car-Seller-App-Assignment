import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   data: [],
   totalData: [],
};

export const pageSlice = createSlice({
   name: "page",
   initialState,
   reducers: {
      setData: (state, action) => {
         state.data = action.payload;
      },
      setTotalData: (state, action) => {
         state.totalData = action.payload;
      },
   },
});

export const selectData = (state) => state.page.data;
export const selectTotalData = (state) => state.page.totalData;

export const { setData, setTotalData } = pageSlice.actions;

export default pageSlice.reducer;
