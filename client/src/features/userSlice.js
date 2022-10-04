import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
   name: "user",
   initialState: {
      user: null,
   },
   reducers: {
      addUser: (state, action) => {
         console.log("addUser");
         state.value.push(action.payload)
      }
   },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;