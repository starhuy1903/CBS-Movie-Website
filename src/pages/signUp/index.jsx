import React, {useEffect} from 'react';
import {useFormik} from "formik";
import * as yup from 'yup'
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {authActions, getAuthError, getAuthStatus, signUp} from "../../store/auth/authSlice";
import Spinner from "../../components/Spinner";
import {
    Bottom,
    Button,
    Container, ErrorAction,
    ErrorText,
    Form,
    IconContainer,
    Left,
    Logo,
    Right,
    Title
} from "../login/Login.styles";
import movieLogo from "../../assets/images/react-movie-logo.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HttpsIcon from "@mui/icons-material/Https";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

const schema = yup.object().shape({
    taiKhoan: yup.string().required("This field is required"),
    matKhau: yup.string().required("This field is required").min(8, "Min length is 8 letter"),
    hoTen: yup.string().required("This field is required").matches(/^[A-Za-z ]+/g, "Name must be a letter"),
    email: yup.string().required("This field is required").email("Email is not correct format"),
    soDT: yup.string().required("This field is required"),
})

const SignUp = () => {
    const authStatus = useSelector(getAuthStatus)
    const error = useSelector(getAuthError)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            email: "",
            soDT: ""
        },
        onSubmit: (values, {resetForm}) => {
            const newUser = {...values, maNhom: "GP02"}
            dispatch(signUp(newUser))
            resetForm();
        },
        validationSchema: schema,
        validateOnChange: false,
        validateOnBlur: true
    })

    useEffect(() => {
        if (authStatus === 'succeeded') {
            navigate("/login");
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
                    <Title>Sign up to Account</Title>
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
                        <div className="form-control">
                            <div className="inputContainer">
                                <PersonIcon className="inputIcon"/>
                                <input
                                    name="hoTen"
                                    type="text"
                                    placeholder="Full Name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            {formik.touched.hoTen && formik.errors.hoTen &&
                                <ErrorText>{formik.errors.hoTen}</ErrorText>}
                        </div>
                        <div className="form-control">
                            <div className="inputContainer">
                                <EmailIcon className="inputIcon"/>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            {formik.touched.email && formik.errors.email &&
                                <ErrorText>{formik.errors.email}</ErrorText>}
                        </div>
                        <div className="form-control">
                            <div className="inputContainer">
                                <PhoneIcon className="inputIcon"/>
                                <input
                                    name="soDT"
                                    type="text"
                                    placeholder="Phone"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            {formik.touched.soDT && formik.errors.soDT &&
                                <ErrorText>{formik.errors.soDT}</ErrorText>}
                        </div>
                        <Button>
                            Sign up
                        </Button>
                        {authStatus === 'failed' && <ErrorAction>{error}</ErrorAction>}
                    </Form>

                    <Bottom>
                        <p>Login with existing account</p>
                        <Link to="/login">Sign in</Link>
                    </Bottom>
                </>)}
            </Left>

            <Right/>
        </Container>
    );
};

export default SignUp;