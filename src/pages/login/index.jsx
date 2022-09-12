import React, {useState} from 'react';
import './login.scss'
import {Button, CircularProgress, TextField} from "@mui/material";
import * as yup from 'yup';
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import api from "../../api/api";
import {Link, useNavigate} from "react-router-dom";
import {authActions} from "../../store/auth/authSlice";

const schema = yup.object().shape({
    taiKhoan: yup.string().required("This field is required"),
    matKhau: yup.string().required("This field is required")
})

const Login = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
        },
        onSubmit: (values) => {
            // console.log(values)
            signIn(values)
        },
        validationSchema: schema,
        validateOnChange: false,
        validateOnBlur: true
    })

    const signIn = async (user) => {
        try {
            setIsLoading(true)
            const res = await api.request({
                url: '/api/QuanLyNguoiDung/DangNhap',
                method: "POST",
                data: user
            })

            const profile = {...res.data.content}
            delete profile.accessToken;

            localStorage.setItem('token', res.data.content.accessToken)
            // console.log(res.data)
            dispatch(authActions.setProfile(profile))
            navigate(-2);
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }


    return (
        <section className="login">
            <h1>Login</h1>
            <form onSubmit={formik.handleSubmit} className="form">
                <TextField
                    name="taiKhoan"
                    className="control"
                    required
                    id="outlined-required"
                    label="Username"
                    onChange={formik.handleChange}
                />
                <TextField
                    name="matKhau"
                    className="control"
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    // autoComplete="current-password"
                    onChange={formik.handleChange}
                />
                <div className="actions">
                    {isLoading && <CircularProgress />}
                    {!isLoading &&
                        <Button type="submit" variant="contained">Login</Button>
                    }
                    <Link to="/signup">Create new account</Link>
                </div>
            </form>
        </section>
    );
};

export default Login;