import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Buttons, Container, Image, Info, Item, Left, Right, Title} from "./Profile.styles";
import avatar from "../../assets/images/avatar.png"
import {authActions, selectProfile} from "../../store/authSlice";
import Spinner from "../../components/Spinner";
import {useNavigate} from "react-router-dom";
import FormInput from "../../components/FormInput";

const Profile = () => {
    const profile = useSelector(selectProfile)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false)

    const handleLogout = (event) => {
        event.preventDefault();

        localStorage.removeItem('token');
        dispatch(authActions.setProfile(null));
        dispatch(authActions.setStatus('idle'))
        navigate("/");
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
        </Container>
    )
};

export default Profile;