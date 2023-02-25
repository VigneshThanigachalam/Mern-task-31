import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Home } from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import { Adduser } from "./Components/Adduser";
import { Navbar } from "./Components/Navbar";
import { Toolbar } from "@mui/material";
import { Manageuser } from "./Components/Manageuser";
import { Update } from "./Components/Update";
function App() {
    return (
        <div className="App">
            <Navbar />
            <Toolbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="adduser" element={<Adduser />} />
                <Route path="manageuser" element={<Manageuser />}/>
                <Route path="manageuser/:id" element={<Update />}/>
            </Routes>
        </div>
    );
}

export default App;
