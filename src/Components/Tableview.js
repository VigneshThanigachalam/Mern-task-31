import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Button } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Navigate, useNavigate } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

export const Tableview = () => {
    const navigate = useNavigate();
    const [deleted_id, setdeleted_id] = useState(null);
    const delete_stu = () => {
        fetch(
            `https://63cd25fad4d47898e3936ec9.mockapi.io/students_data/${deleted_id}`,
            {
                method: "DELETE",
            }
        )
            .then((data) => data.json())
            .then(() => setChange(deleted_id));
        
    };
    const [change, setChange] = useState()
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetch("https://63cd25fad4d47898e3936ec9.mockapi.io/students_data", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((final_response) => setdata(final_response));
        handleClose();
    }, [change]);

    const [open, setOpen] = useState(false);
    const handleClickOpen = (row_id) => {
        setOpen(true);
        setdeleted_id(row_id);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <TableContainer
                component={Paper}
                sx={{ width: "70%", margin: "auto" }}
            >
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">
                                Name
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                Mobile
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                Gender
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                Manage
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                Delete
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    {data ? (
                        <TableBody>
                            {data.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell align="center">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {row.mobile}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {row.gender}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <EditOutlinedIcon
                                            sx={{
                                                "&:hover": { color: "#1976d2" },
                                            }}
                                            onClick={() => {
                                                navigate(row.id);
                                            }}
                                        />
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <DeleteOutlineOutlinedIcon
                                            sx={{
                                                "&:hover": { color: "#1976d2" },
                                            }}
                                            onClick={() => {
                                                handleClickOpen(row.id);
                                            }}
                                        ></DeleteOutlineOutlinedIcon>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    ) : (
                        <TableBody>
                            <StyledTableRow>
                                <StyledTableCell
                                    colSpan={5}
                                    sx={{ textAlign: "center" }}
                                >
                                    Loading...
                                </StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    )}
                </Table>
            </TableContainer>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Are you sure want to delete?"}</DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>cancel</Button>
                    <Button onClick={delete_stu}>ok</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
