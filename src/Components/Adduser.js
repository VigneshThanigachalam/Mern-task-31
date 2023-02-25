import React from "react";
import { Button, TextField } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import * as yup from "yup";
import FormHelperText from "@mui/material/FormHelperText";
import {useNavigate} from "react-router-dom"
const formValidationSchema = yup.object({
    name: yup.string().required("name is required"),
    mobile: yup.string().required("mobile number is required").min(10, "please enter a valid mobile number"),
    gender: yup.string().required("gender is required"),
});
export const Adduser = () => {
    const navigate=useNavigate();
    const { handleSubmit, touched, errors, handleChange, handleBlur, values } = useFormik({
        initialValues: {
            name: "",
            mobile:"",
            gender: "",
        },
        validationSchema: formValidationSchema,
            onSubmit: (data) =>{ 
            fetch("https://63cd25fad4d47898e3936ec9.mockapi.io/students_data",
            {method:"POST",
            body: JSON.stringify(data),
             headers:{"content-type":"application/json"}
            }).then(()=>navigate("/manageuser"));
            },
        
    });
    return (
        <Stack m={4} component="form" onSubmit={handleSubmit}>
            <div className="add_form">
                <TextField
                    id="name"
                    type="text"
                    placeholder="enter the name"
                    label={"Name"}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name={"name"}
                    error={touched.name && errors.name? true:null}
                    helperText={touched.name && errors.name ? errors.name : null}
                />
                <TextField
                    id="mobile"
                    type="number"
                    placeholder="enter the mobile number"
                    label={"Mobile"}
                    value={values.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name={"mobile"}
                    error={touched.mobile && errors.mobile ? true:null}
                    helperText={touched.mobile && errors.mobile ? errors.mobile : null}
                />
                <FormControl sx={{ minWidth: 120 }}>
                    <InputLabel id="gender_label">Gender</InputLabel>
                    <Select
                        labelId="gender_label"
                        id="gender"
                        label="gender"
                        value={values.gender}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name={"gender"}
                        error={touched.gender && errors.gender ?  true:null}
                    // helpertext={touched.gender && errors.gender ? errors.gender : null}
                    >
                        <MenuItem value={"male"}>Male</MenuItem>
                        <MenuItem value={"female"}>Female</MenuItem>
                    </Select>
                    {touched.gender && errors.gender ? <FormHelperText>{errors.gender}</FormHelperText>: null}
                    
                </FormControl>
                <Button type="submit" variant="contained" size="large">
                    Add
                </Button>
            </div>
        </Stack>
    );
};
