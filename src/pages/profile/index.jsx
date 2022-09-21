import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Buttons, Container, Image, Info, Item, Left, Right, Title} from "./Profile.styles";
import avatar from "../../assets/images/avatar.png"
import {authActions, fetchProfile, getAuthError, getAuthStatus, selectProfile} from "../../store/authSlice";
import {useNavigate} from "react-router-dom";
import FormInput from "../../components/FormInput";
import {Backdrop, CircularProgress} from "@mui/material";
import {HTTP_STATUS} from "../../api/httpStatusConstants";
import {notificationActions} from "../../store/notificationSlice";
import Spinner from "../../components/Spinner";

const Profile = () => {
    const profile = useSelector(selectProfile)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loading = useSelector(getAuthStatus);
    const error = useSelector(getAuthError)

    const [open, setOpen] = useState(false)

    const handleLogout = (event) => {
        event.preventDefault();

        localStorage.removeItem('token');
        dispatch(authActions.setProfile(null));
        dispatch(authActions.resetStatus())
        navigate("/");
    }

    if(loading === HTTP_STATUS.FULFILLED) {
        dispatch(notificationActions.createAlert({
            msg: 'Update successful',
            type: "success"
        }))
        dispatch(authActions.resetStatus())
        dispatch(fetchProfile())
    } else if(loading === HTTP_STATUS.REJECTED) {
        dispatch(notificationActions.createAlert({
            msg: error,
            type: "error"
        }))
        dispatch(authActions.resetStatus())
        dispatch(authActions.resetError())
    }


    let content;
    if (!profile) {
        content = <Spinner />
    } else {
        const {
            taiKhoan,
            hoTen,
            email,
            soDT,
        } = profile;
        content = (<>
            <Left>
                <Image src={avatar}/>
                <h1>{hoTen}</h1>

                <Buttons>
                    <Button className="leftBtn" onClick={() => setOpen(true)}>
                        Change
                    </Button>
                    <Button className="rightBtn" onClick={handleLogout}>
                        Logout
                    </Button>
                </Buttons>
            </Left>
            <Right>
                <Title>Information</Title>
                <Info>
                    <Item>
                        <span>Username</span>
                        <p>{taiKhoan}</p>
                    </Item>
                    <Item>
                        <span>Email</span>
                        <p>{email}</p>
                    </Item>
                    <Item>
                        <span>Phone</span>
                        <p>{soDT}</p>
                    </Item>
                    <Item>
                        <span>Full name</span>
                        <p>{hoTen}</p>
                    </Item>
                </Info>
            </Right>
        </>)
    }

    return (
        <Container>
            {content}
            {open && <FormInput open={open} setOpen={setOpen} profile={profile} />}
            {loading === HTTP_STATUS.PENDING &&
                <Backdrop
                    sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                    open={true}
                >
                    <CircularProgress color="inherit"/>
                </Backdrop>
            }
        </Container>
    )
};

export default Profile;