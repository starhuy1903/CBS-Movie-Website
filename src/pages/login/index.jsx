import React, {useEffect} from 'react';
import * as yup from 'yup';
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import {authActions, getAuthError, getAuthStatus, signIn} from "../../store/auth/authSlice";
import {
    Bottom,
    Button,
    Container, ErrorAction,
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

const schema = yup.object().shape({
    taiKhoan: yup.string().required("This field is required"),
    matKhau: yup.string().required("This field is required")
})

const Login = () => {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const authStatus = useSelector(getAuthStatus)
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
            if (authStatus === 'succeeded') {
                navigate(-1);
            }
        }, [navigate, authStatus])

        useEffect(() => {
            if(authStatus === 'failed' && Object.values(formik.touched).some(item => item)) {
                dispatch(authActions.setStatus('idle'))
                dispatch(authActions.resetError)
            }

            return () => {
                if(authStatus === 'failed') {
                    dispatch(authActions.setStatus('idle'))
                    dispatch(authActions.resetError)
                }
            }
        }, [dispatch, authStatus, formik.touched])

        return (
            <Container>
                <Left>
                    {authStatus === 'loading' ? (
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
                            {authStatus === 'failed' && <ErrorAction>{error}</ErrorAction>}
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