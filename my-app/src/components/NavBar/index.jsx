import { Button, Toolbar } from '@material-ui/core';
import HomeIcon from "@material-ui/icons/Home";
import UitlegIcon from "@material-ui/icons/Help";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AddDataIcon from "@material-ui/icons/PostAdd";
import React from 'react';
import { useNavigate } from "react-router-dom";
import "./index.css";

/**
 * This component displays a list of buttons. These buttons navigates the user to different pages of the application.
 * @returns The render components of the NavBar component.
 */
function NavBar() {
    const navigate = useNavigate();
    return (
        <div className="navbar">
            <Toolbar className="bar">
                <Button startIcon={<HomeIcon />} size="large" className="menuButton" onClick={() => { navigate("/") }}>
                    Home
                </Button>
                <Button startIcon={<UitlegIcon />} size="large" className="menuButton" onClick={() => { navigate("/uitleg") }}>
                    Uitleg
                </Button>
                <Button startIcon={<DashboardIcon />} size="large" className="menuButton" onClick={() => { navigate("/dashboard") }}>
                    Dashboard
                </Button>
                <Button startIcon={<AddDataIcon />} size="large" className="menuButton" onClick={() => { navigate("/add_data") }}>
                    Add Data
                </Button>
            </Toolbar>
        </div >
    )
}

export default NavBar