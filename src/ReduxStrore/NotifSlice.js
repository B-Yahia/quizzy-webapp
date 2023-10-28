import { createSlice } from "@reduxjs/toolkit";

const NotifSlice = createSlice({
  name: "notifications",
  initialState: {
    listOfMsgs: [],
    hiden: true,
  },
  reducers: {
    addNotification: (state, action) => {
      state.listOfMsgs.push(action.payload);
      state.hiden = false;
    },
    removeNotification: (state, action) =>
      state.listOfMsgs.filter(
        (notification) => notification !== action.payload
      ),
    cleanNotifications: (state) => {
      state.listOfMsgs.length = 0;
    },
    setHidenToFalse: (state) => {
      state.hiden = false;
    },
    setHidenToTrue: (state) => {
      state.hiden = true;
    },
  },
});

export const {
  addNotification,
  removeNotification,
  setHidenToFalse,
  setHidenToTrue,
  cleanNotifications,
} = NotifSlice.actions;
export default NotifSlice.reducer;
