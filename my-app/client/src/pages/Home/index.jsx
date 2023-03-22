import React, { Fragment } from "react";
import "./index.css";
import NavBar from "../../components/NavBar";
import { Grid } from "@material-ui/core";
import TextBox from "../../components/TextBox";
import TextBigSmall from "../../components/TextBigSmall";
import UnityGame from "../../components/UnityGame";


function Home() {
    return (
        <React.Fragment>
            <div className="Home">
                <Grid container className="grid-container" spacing={1}>
                    <Grid item className="grid-navbar" xs={1}>
                        <NavBar />
                    </Grid>
                    <Grid item className="grid-content" xs={1}>
                        <div class="unity">
                            <div class="unityGame">
                                <UnityGame />
                            </div>
                        </div><div class="controls">
                            <TextBox head="Controls">
                                <TextBigSmall bigText="W: " smallText="Move Forward" />
                                <TextBigSmall bigText="A: " smallText="Move Left" />
                                <TextBigSmall bigText="S: " smallText="Move Down" />
                                <TextBigSmall bigText="D: " smallText="Move Right" />
                                <TextBigSmall bigText="Ctrl: " smallText="Fly Down" />
                                <TextBigSmall bigText="Spacebar: " smallText="Fly Up" />
                                <TextBigSmall bigText="Mouse Left: " smallText="Select Object" />
                            </TextBox>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment >
    );
}

export default Home;