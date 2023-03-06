import React from "react";
import "./index.css";
import NavBar from "../../components/NavBar";
import { Grid } from "@material-ui/core";

function Add_Data() {
    return (
        <React.Fragment>
            <div className="Add_Data">
                <Grid container className="grid-container" spacing={1}>
                    <Grid item className="grid-navbar" xs={1}>
                        <NavBar />
                    </Grid>
                    <Grid item className="grid-content" xs={1}>
                        <h1>Add_data is here</h1>
                    </Grid>
                </Grid>
            </div>

        </React.Fragment>
    );
}

export default Add_Data;