import React, {useEffect} from 'react';
import * as yup from 'yup';
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import {authActions, fetchProfile, getAuthError, getAuthStatus, signIn} from "../../store/authSlice";
import {
    Bottom,
    Button,
    Container,
    ErrorText,
    Feature,
    Form,
    IconContainer,
    Left,
    Logo,
    Right,
    Title
} from "./Login.styles";
import movieLogo from '../../assets/images/react-movie-logo.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HttpsIcon from '@mui/icons-material/Https';
import Spinner from "../../components/Spinner";
import {HTTP_STATUS} from "../../api/httpStatusConstants";
import {notificationActions} from "../../store/notificationSlice";

const schema = yup.object().shape({
    taiKhoan: yup.string().required("This field is required"),
    matKhau: yup.string().required("This field is required")
})

const Login = () => {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const status = useSelector(getAuthStatus)
        const error = useSelector(getAuthError)

        const formik = useFormik({
            initialValues: {
                taiKhoan: "",
                matKhau: "",
            },
            onSubmit: (user, {resetForm}) => {
                dispatch(signIn(user))
                resetForm();
            },
            validationSchema: schema,
            validateOnChange: false,
            validateOnBlur: true
        })

        useEffect(() => {
            if (status === HTTP_STATUS.FULFILLED) {
                dispatch(authActions.resetStatus())
                dispatch(fetchProfile())
                navigate(-1);
            } else if (status === HTTP_STATUS.REJECTED) {
                dispatch(notificationActions.createAlert({
                    msg: error,
                    type: "error"
                }))
                dispatch(authActions.resetStatus())
                dispatch(authActions.resetError())
            }
        }, [dispatch, navigate, status, error])

        return (
            <Container>
                <Left>
                    {status === HTTP_STATUS.PENDING ? (
                        <Spinner/>
                    ) : (<>
                        <Logo src={movieLogo}/>
                        <Title>Sign in to Account</Title>
                        <IconContainer>
                            <FacebookIcon className="icon"/>
                            <GoogleIcon className="icon"/>
                        </IconContainer>
                        <Form onSubmit={formik.handleSubmit}>
                            <div className="form-control">
                                <div className="inputContainer">
                                    <AccountCircleIcon className="inputIcon"/>
                                    <input
                                        name="taiKhoan"
                                        type="text"
                                        placeholder="Username"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                {formik.touched.taiKhoan && formik.errors.taiKhoan &&
                                    <ErrorText>{formik.errors.taiKhoan}</ErrorText>}
                            </div>
                            <div className="form-control">
                                <div className="inputContainer">
                                    <HttpsIcon className="inputIcon"/>
                                    <input
                                        name="matKhau"
                                        type="password"
                                        placeholder="Password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                {formik.touched.matKhau && formik.errors.matKhau &&
                                    <ErrorText>{formik.errors.matKhau}</ErrorText>}
                            </div>
                            <Feature>
                                <div className="rememberMe">
                                    <label>
                                        <input type="checkbox"/>
                                        Remember me
                                    </label>
                                </div>
                                <Link to="/login">Forgot Password?</Link>
                            </Feature>
                            <Button>
                                Sign in
                            </Button>
                        </Form>

                        <Bottom>
                            <p>Don't have an account yet?</p>
                            <Link to="/signup">Sign up</Link>
                        </Bottom>
                    </>)}
                </Left>

                <Right/>
            </Container>
        );
    }
;

export default Login;