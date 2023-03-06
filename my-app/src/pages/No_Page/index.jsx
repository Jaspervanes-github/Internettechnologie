import React from "react";
import "./index.css";
import NavBar from "../../components/NavBar";
import { Grid } from "@material-ui/core";

function No_Page() {
    return (
        <React.Fragment>
            <div className="No_Page">
                <Grid container className="grid-container" spacing={1}>
                    <Grid item className="grid-navbar" xs={1}>
                        <NavBar />
                    </Grid>
                    <Grid item className="grid-content" xs={1}>
                        <h1>Error 404: Page Not Found</h1>
                        <h3>Something went wrong...</h3>
                    </Grid>
                </Grid>
            </div>

        </React.Fragment>
    );
}

export default No_Page;