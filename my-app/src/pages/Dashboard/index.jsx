import React from "react";
import "./index.css";
import NavBar from "../../components/NavBar";
import { Grid } from "@material-ui/core";

function Dashboard() {
    return (
        <React.Fragment>
            <div className="Dashboard">
                <Grid container className="grid-container" spacing={1}>
                    <Grid item className="grid-navbar" xs={1}>
                        <NavBar />
                    </Grid>
                    <Grid item className="grid-content" xs={1}>
                        <h1>Dashboard is here</h1>
                    </Grid>
                </Grid>
            </div>
            
        </React.Fragment>
    );
}

export default Dashboard;