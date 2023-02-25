import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
export const Navbar = (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClose = () => {
        navigate(-1);
    };
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    {location.pathname === "/" ? (
                        ""
                    ) : (
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    )}
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "block", sm: "block" },
                        }}
                    >
                        STUDENT & TEACHER MANAGEMENT (using MOCK API)
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
