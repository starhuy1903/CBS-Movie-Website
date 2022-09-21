import React from 'react';
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import * as yup from "yup";
import {Box, Button, Modal, TextField} from "@mui/material";
import './FormInput.scss'
import {updateProfile} from "../../store/auth/authSlice";

const FormInput = ({open, setOpen, profile}) => {
    const dispatch = useDispatch();

    const schema = yup.object().shape({
        taiKhoan: yup.string().required("This field is required"),
        hoTen: yup.string().required("This field is required").matches(/^[A-Za-z ]+/g, "Name must be a letter"),
        email: yup.string().required("This field is required").email("Email is not correct format"),
        soDT: yup.string().required("This field is required"),
    })

    const formik = useFormik({
        initialValues: profile && {
            taiKhoan: profile.taiKhoan,
            hoTen: profile.hoTen,
            email: profile.email,
            soDT: profile.soDT,
        },
        onSubmit: (values) => {
            const updatedUser = {
                ...values,
                matKhau: profile.matKhau,
                maNhom: "GP02",
                maLoaiNguoiDung: profile.maLoaiNguoiDung
            }
            console.log(updatedUser);
            dispatch(updateProfile(updatedUser))
            setOpen(false)
        },
        validationSchema: schema,
        validateOnChange: false,
        validateOnBlur: true
    })

    console.log('render')

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="boxModal" >
                <h2 className="title">
                    Update User Information
                </h2>
                <form onSubmit={formik.handleSubmit} className="controls">
                    <TextField
                        name="taiKhoan"
                        label="Account"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.taiKhoan}
                        className="inputControl"
                    />
                    {formik.touched.taiKhoan && formik.errors.taiKhoan &&
                        <p className="errorText">{formik.errors.taiKhoan}</p>}
                    <TextField
                        name="email"
                        label="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className="inputControl"
                    />
                    {formik.touched.email && formik.errors.email && <p className="errorText">{formik.errors.email}</p>}

                    <TextField
                        name="soDT"
                        label="Phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.soDT}
                        className="inputControl"
                    />
                    {formik.touched.soDT && formik.errors.soDT && <p className="errorText">{formik.errors.soDT}</p>}

                    <TextField
                        name="hoTen"
                        label="Full Name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.hoTen}
                        className="inputControl"
                    />
                    {formik.touched.hoTen && formik.errors.hoTen && <p className="errorText">{formik.errors.hoTen}</p>}
                    <div className="actionBtn">
                        <Button variant="contained" type="submit">Update</Button>
                        <Button
                            variant="contained"
                            color="inherit"
                            onClick={() => setOpen(false)}
                        >Cancel</Button>
                    </div>
                </form>
            </Box>
        </Modal>
    );
};

export default FormInput;