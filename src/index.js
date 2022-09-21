import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./store";
import {Provider} from "react-redux";
import {fetchProfile} from "./store/auth/authSlice";
import {fetchCinemaSystemInfo} from "./store/cinemaSystemInfo/cinemaSystemInfoSlice";

if (localStorage.getItem('token')) {
    store.dispatch(fetchProfile())
}

store.dispatch(fetchCinemaSystemInfo())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

