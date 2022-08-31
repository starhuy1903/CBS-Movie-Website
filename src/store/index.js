import {configureStore} from "@reduxjs/toolkit";
import bookingSlice from "./booking/bookingSlice";
import authSlice from "./auth/authSlice";
import uiSlice from "./ui/uiSlice";

const store = configureStore({
    reducer: {
        booking: bookingSlice.reducer,
        auth: authSlice.reducer,
        ui: uiSlice.reducer,
    }
})

export default store;