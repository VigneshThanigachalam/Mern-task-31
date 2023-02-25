import * as React from "react";
import { Stack } from "@mui/system";
import Toolbar from "@mui/material/Toolbar";
import { Navbar } from "./Navbar";
import { CardElement } from "./CardElement";
import { Grid } from "@mui/material";
import { Addpage } from "./Adduser";
import { Tableview } from "./Tableview";
import { Update } from "./Update";

const manage_user_image =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRln3yt-esc5lNmtgcv_gpb8N-6abTs5awKUA&usqp=CAU";
const add_user_image =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlpkIDQVapD9SY9xloOjjAKQEkIshfmd0_Eg&usqp=CAU";

export const Home = (props) => {
    return (
        <>
            <Navbar />
            <Toolbar />
            <Stack m={4}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={2}>
                        <CardElement
                            name={"Add"}
                            image={add_user_image}
                            url={"Adduser"}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={2}>
                        <CardElement
                            name={"Manage"}
                            image={manage_user_image}
                            url={"manageuser"}
                        />
                    </Grid>
                </Grid>
            </Stack>
        </>
    );
};
