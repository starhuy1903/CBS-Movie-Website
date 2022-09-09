import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Button, TextField} from "@mui/material";
import FormInput from "../../components/FormInput";
import './profile.scss'

const Profile = () => {
    const profile = useSelector(state => state.auth.profile)
    const [isChanging, setIsChanging] = useState(false);

    if (!profile) {
        return <h1>Loading....</h1>
    }

    const {
        taiKhoan,
        hoTen,
        email,
        soDT,
    } = profile;

    return (
        <div className="profile">
            <h1 className="title">Profile</h1>
            <div className="info">
                <TextField
                    disabled
                    name="taiKhoan"
                    id="taiKhoan"
                    label="Account"
                    value={taiKhoan}
                    className="inputControl"
                />
                <TextField
                    disabled
                    name="email"
                    label="Email"
                    value={email}
                    className="inputControl"
                />
                <TextField
                    disabled
                    name="soDT"
                    label="Phone"
                    value={soDT}
                    className="inputControl"
                />
                <TextField
                    disabled
                    name="hoTen"
                    label="Full Name"
                    value={hoTen}
                    className="inputControl"
                />
            </div>
            <Button
                variant="contained"
                color="primary"
                onClick={() => setIsChanging(true)}
                className="actionBtn"
            >
                Change
            </Button>
            {isChanging && <FormInput profile={profile} setIsChanging={setIsChanging} />}
        </div>
    )
};

export default Profile;