import React, { useEffect, useState } from "react";
import "./index.css";
import NavBar from "../../components/NavBar";
import { Grid } from "@material-ui/core";
import Axios from 'axios';

import { createToastMessage } from "../../utils/toast";

var formData = {
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

    setFormData({ ...formData, [name]: value });
}

/**
 * Handles the submittions of the form element of the popups.
 * @param {*} event This variable contains all the data of the method call, for example where it gets called from.
 */
async function handleSubmit(event) {
    createToastMessage("The form is being submitted, please wait...", 3000);

    Axios.post("http://localhost:3001/api/insert", { formData: formData }).then((res) => {
        console.log("We did it!: " + res);
        alert("Succesfull insert!");
    });

    event.preventDefault();
}

function setFormData(newFormData) {
    formData = newFormData;
}

function deleteRow(id) {
    Axios.delete(`http://localhost:3001/api/delete/${id}`);
}

function updateRow(id, formData) {
    Axios.put("http://localhost:3001/api/update", {
        formData: formData,
        id: id,
    });
}

function AddData() {
    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) => {
            console.log(response);
        });
    }, []);

    const [deleteRowIndex, setDeleteRowIndex] = useState(-1);

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
                                    value={formData.colorWon}
                                    onChange={(event) => {
                                        handleChange(event);
                                    }}
                                >
                                    <option value="white">WHITE</option>
                                    <option value="black">BLACK</option>
                                    <option value="tie">TIE</option>
                                </select>

                                <input className="submit-button" type="submit" value="Submit Form" />
                            </form>
                        </div>
                        <input className="update-button" type="text" pattern="[0-9]*" onChange={(event) => { setDeleteRowIndex(event.target.value) }} />
                        <button onClick={() => { deleteRow(deleteRowIndex) }}>Delete</button>
                    </Grid>
                </Grid>
            </div>

        </React.Fragment>
    );
}

export default AddData;