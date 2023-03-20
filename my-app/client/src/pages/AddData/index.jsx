import React from "react";
import "./index.css";
import NavBar from "../../components/NavBar";
import { Grid } from "@material-ui/core";

import { createToastMessage } from "../../utils/toast";


var state = {
    colorWon: "white",
}

/**
 * Handles the changes in the form element of the popups.
 * @param {*} event This variable contains all the data of the method call, for example where it gets called from.
 */
function handleChange(event) {
    const target = event.target;
    const name = target.name;
    let value = target.value;

    setState({...state, [name] : value});
}

/**
 * Handles the submittions of the form element of the popups.
 * @param {*} event This variable contains all the data of the method call, for example where it gets called from.
 */
async function handleSubmit(event) {
    createToastMessage("The form is being submitted, please wait...", 3000);

    //TODO: Send the form data to the database
    alert('State data: ' + state.toString());

    event.preventDefault();
}

function setState(newState){
    state = newState;
}

function AddData() {
    return (
        <React.Fragment>
            <div className="AddData">
                <Grid container className="grid-container" spacing={1}>
                    <Grid item className="grid-navbar" xs={1}>
                        <NavBar />
                    </Grid>
                    <Grid item className="grid-content" xs={1}>
                        <h1>Add_data is here</h1>
                        <div className="formContent">
                            <form
                                onSubmit={(event) => {
                                    //TODO: Check if all the data inputted is valid data
                                    handleSubmit(
                                        event,
                                    );
                                }}>

                                <select
                                    type="select"
                                    name="colorWon"
                                    value={state.colorWon}
                                    onChange={(event) => {
                                        handleChange(event);
                                    }}
                                >
                                    <option value="white">WHITE</option>
                                    <option value="black">BLACK</option>
                                </select>

                                <input className="submit-button" type="submit" value="Submit Form" />
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </div>

        </React.Fragment>
    );
}

export default AddData;