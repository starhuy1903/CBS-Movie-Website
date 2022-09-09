import React, {useState} from 'react';
import {Button, CircularProgress, TextField} from "@mui/material";
import {useFormik} from "formik";
import * as yup from 'yup'
import './signUp.scss'
import {Link, useNavigate} from "react-router-dom";
import api from "../../api/api";

const schema = yup.object().shape({
    taiKhoan: yup.string().required("This field is required"),
    matKhau: yup.string().required("This field is required").min(8, "Min length is 8 letter"),
    hoTen: yup.string().required("This field is required").matches(/^[A-Za-z ]+/g, "Name must be a letter"),
    email: yup.string().required("This field is required").email("Email is not correct format"),
    soDT: yup.string().required("This field is required"),
})

const SignUp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            email: "",
            soDT: ""
        },
        onSubmit: (values) => {
            // console.log(values);
            const newUser = {...values, maNhom: "GP02"}
            signUp(newUser)
        },
        validationSchema: schema,
        validateOnChange: false,
        validateOnBlur: true
    })

    const signUp = async (user) => {
        try {
            setIsLoading(true)
            const res = await api.request({
                url: '/api/QuanLyNguoiDung/DangKy',
                method: "POST",
                data: user
            })
            console.log(res.data)
            navigate("/login")
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    console.log('render - sign up')

    return (
        <section className="signUp">
            <h1>Sign Up</h1>
            <form onSubmit={formik.handleSubmit} className="form">
                <TextField
                    name="taiKhoan"
                    className="control"
                    label="Username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.taiKhoan && formik.errors.taiKhoan && <p className="errorText">{formik.errors.taiKhoan}</p>}
                <TextField
                    name="matKhau"
                    className="control"
                    label="Password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.matKhau && formik.errors.matKhau && <p className="errorText">{formik.errors.matKhau}</p>}
                <TextField
                    name="hoTen"
                    className="control"
                    label="Fullname"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.hoTen && formik.errors.hoTen && <p className="errorText">{formik.errors.hoTen}</p>}
                <TextField
                    name="email"
                    className="control"
                    label="Email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && <p className="errorText">{formik.errors.email}</p>}

                <TextField
                    name="soDT"
                    className="control"
                    label="Phone Number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.soDT && formik.errors.soDT && <p className="errorText">{formik.errors.soDT}</p>}

                <div className="actions">
                    {isLoading && <CircularProgress />}
                    {!isLoading &&
                        <Button type="submit" variant="contained">Sign Up</Button>
                    }
                    <Link to="/login">Login with existing account</Link>
                </div>
            </form>
        </section>
    );
};

export default SignUp;