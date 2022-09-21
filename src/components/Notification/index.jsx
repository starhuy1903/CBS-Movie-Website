import React, {useEffect, useState} from 'react';
import {Alert, Snackbar} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {notificationActions, selectNotification} from "../../store/notificationSlice";

const Notification = () => {
    const [open, setOpen] = useState(false);
    const noti = useSelector(selectNotification);
    const dispatch = useDispatch()

    const handleClose = () => {
        setOpen(false)
        dispatch(notificationActions.resetAlert())
    }

    useEffect(() => {
        if(noti.msg)
            setOpen(true)
    }, [noti])

    if(!noti?.msg)
        return null;

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={noti.type} sx={{ width: '100%' }}>
                {noti.msg}
            </Alert>
        </Snackbar>
    );
};

export default Notification;