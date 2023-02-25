import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";
export const CardElement = (prop) => {
    const navigate=useNavigate();
    return (
        <>
            <Card variant="outlined">
                <CardMedia
                    sx={{
                        width: "100%",
                        height: "200px",
                        backgroundSize: "contain",
                    }}
                    image={prop.image}
                    title={prop.name}
                />
                <CardActions sx={{ float: "right" }}>
                    <Button variant="contained" size="small" onClick={()=>navigate(prop.url)} >
                        {prop.name}
                    </Button>
                </CardActions>
            </Card>
        </>
    );
};
