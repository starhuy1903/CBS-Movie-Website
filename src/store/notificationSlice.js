import {createSlice} from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        msg: '',
        type: null,
    },
    reducers: {
        createAlert(state, action) {
            state.msg = action.payload.msg;
            state.type = action.payload.type;
        },
        resetAlert(state) {
            state.msg = '';
            state.type = null;
        }
    }
})

export const selectNotification = state => state.notification;
export const notificationActions = notificationSlice.actions;

export default notificationSlice.reducer;