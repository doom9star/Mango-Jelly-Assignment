import { createSlice } from "@reduxjs/toolkit";
import getID from "../utils/getID";

const initialState = {
  user: {
    name: "",
  },
  mobiles: [],
};

const stateSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setName(state, action) {
      state.user.name = action.payload;
    },
    setMobile(state, action) {
      state.mobiles.unshift({
        id: getID(),
        createdAt: Date.now(),
        ...action.payload,
      });
    },
    deleteMobile(state, action) {
      state.mobiles = state.mobiles.filter((m) => m.id !== action.payload);
    },
    editMobile(state, action) {
      state.mobiles[
        state.mobiles.findIndex((m) => m.id === action.payload.id)
      ] = action.payload;
    },
  },
});

export const { setName, setMobile, deleteMobile, editMobile } =
  stateSlice.actions;
export default stateSlice.reducer;
