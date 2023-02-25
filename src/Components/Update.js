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
import {useNavigate, useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import { UpdateTemplate } from "./UpdateTemplate";



export const Update = () => {
    const stu_id=useParams();
    const [stu, setstu] = useState(null);
    useEffect(() => {
        fetch(`https://63cd25fad4d47898e3936ec9.mockapi.io/students_data/${stu_id.id}`, {
          method: "GET",
        })
          .then((data) => data.json())
          .then((db) => {setstu(db);
          });
      }, []);
      
      return (
        <>{stu ? (
            <UpdateTemplate stu={stu}/>):"Loading..."}
                    </>
  )
}
