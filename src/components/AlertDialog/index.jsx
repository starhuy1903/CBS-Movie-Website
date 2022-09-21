import React, {useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText} from "@mui/material";
import {useNavigate} from "react-router-dom";

const AlertDialog = ({msg, handleFinish}) => {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();

    const handleClose = () => {
        setOpen(false);
        handleFinish(true);
    };

    const goToHome = () => {
        handleFinish(false);
        navigate("/");
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {msg}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={goToHome}>Back to Home</Button>
                <Button onClick={handleClose} autoFocus>
                    Continue to book tickets
                </Button>
            </DialogActions>
        </Dialog>

    );
};

export default AlertDialog;