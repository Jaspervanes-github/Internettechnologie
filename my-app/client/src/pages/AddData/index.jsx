import React, { useEffect, useState } from "react";
import "./index.css";
import NavBar from "../../components/NavBar";
import { Button, Grid } from "@material-ui/core";

import { createToastMessage } from "../../utils/toast";
import FormComponent from "../../components/FormComponent";
import { updateEntry, deleteEntry, insertEntry, getAllDataFromDB } from "../../utils/dbQueries";

var formData = {
    colorWon: "tie",
    amountOfMovesPlayed: 0,
    amountOfPiecesCaptured: 0,
    chessOpening: "ruy_lopez",
    pgnString: "-",
    timestamp: new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).format(Date.now()),
}

/**
 * Handles the submittions of the form element of the popups.
 * @param {*} event This variable contains all the data of the method call, for example where it gets called from.
 */
async function handleSubmit(event, dbData, setDbData, colorWon, amountOfMovesPlayed, amountOfPiecesCaptured, chessOpening, pgnString) {
    createToastMessage("The form is being submitted, please wait...", 3000);

    if (colorWon == "null" || amountOfMovesPlayed == 0 || amountOfPiecesCaptured == 0 || chessOpening == "null" || pgnString == "") {
        createToastMessage("Make sure all the fields are filled in before submitting the form", 3000);
        return;
    }
    //Updates the timestamp
    setFormData(colorWon, amountOfMovesPlayed, amountOfPiecesCaptured, chessOpening, pgnString);

    insertEntry(formData);
    getAllDataFromDB(setDbData);

    let selectElement = document.getElementById("entryIndex");
    let option = document.createElement("option");
    option.text = dbData[dbData.length].id;
    selectElement.add(option, selectElement.options.length);

    event.preventDefault();
}

function setFormData(colorWon, amountOfMovesPlayed, amountOfPiecesCaptured, chessOpening, pgnString) {
    formData = {
        colorWon: colorWon,
        amountOfMovesPlayed: amountOfMovesPlayed,
        amountOfPiecesCaptured: amountOfPiecesCaptured,
        chessOpening: chessOpening,
        pgnString: pgnString,
        timestamp: new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).format(Date.now()),
    };
}

function onClickNewForm(setEntryIndex) {
    setEntryIndex(-1);
}

function onClickUpdateEntry(id, dbData, setDbData, colorWon, amountOfMovesPlayed, amountOfPiecesCaptured, chessOpening, pgnString) {
    console.log("Before Update: " + dbData);
    if (dbData.some(data => data.id == id)) {
        setFormData(colorWon, amountOfMovesPlayed, amountOfPiecesCaptured, chessOpening, pgnString);
        updateEntry(id, formData);
        let temp = [...dbData];
        temp[temp.findIndex(data => data.id == id)] = { ...formData, id: temp[temp.findIndex(data => data.id == id)].id };
        setDbData(temp);
        console.log("After Update: " + temp);
    }
}

function onClickDeleteEntry(id, dbData, setDbData) {
    if (dbData.some(data => data.id == id)) {
        deleteEntry(id);
        let temp = [...dbData];
        temp = temp.filter(data => data.id != id);
        setDbData(temp);
    }
}

function AddData() {
    const [dbData, setDbData] = useState([]);
    const [entryIndex, setEntryIndex] = useState();

    const [colorWon, setColorWon] = useState("null");
    const [amountOfMovesPlayed, setAmountOfMovesPlayed] = useState(0);
    const [amountOfPiecesCaptured, setAmountOfPiecesCaptured] = useState(0);
    const [chessOpening, setChessOpening] = useState("null");
    const [pgnString, setPgnString] = useState("");

    useEffect(() => {
        getAllDataFromDB(setDbData);
    }, []);

    useEffect(() => {
        console.log("In useEffect: " + entryIndex);
        let data = dbData[dbData.findIndex(data => data.id == entryIndex)];

        if (data != null) {
            //Updates all the components when a new entryIndex is selected
            setColorWon(data.colorWon);
            setAmountOfMovesPlayed(data.amountOfMovesPlayed);
            setAmountOfPiecesCaptured(data.amountOfPiecesCaptured);
            setChessOpening(data.chessOpening);
            setPgnString(data.pgnString);
        } else {
            setColorWon("null");
            setAmountOfMovesPlayed(0);
            setAmountOfPiecesCaptured(0);
            setChessOpening("null");
            setPgnString("");
        }
    }, [entryIndex]);

    if (!dbData) return <div>Loading...</div>;

    return (
        <React.Fragment>
            <div className="AddData">
                <Grid container className="grid-container" spacing={1}>
                    <Grid item className="grid-navbar" xs={1}>
                        <NavBar />
                    </Grid>
                    <Grid item className="grid-content" xs={1}>
                        <div className="formContent">
                            <form
                                onSubmit={(event) => {
                                    handleSubmit(
                                        event,
                                        dbData,
                                        setDbData,
                                        colorWon,
                                        amountOfMovesPlayed,
                                        amountOfPiecesCaptured,
                                        chessOpening,
                                        pgnString
                                    );
                                }}>

                                <Button variant="contained" onClick={() => {
                                    onClickNewForm(setEntryIndex);
                                    setEntryIndex(-1);
                                }}>New Form</Button>
                                <Button variant="contained" onClick={() => {
                                    onClickUpdateEntry(
                                        entryIndex,
                                        dbData,
                                        setDbData,
                                        colorWon,
                                        amountOfMovesPlayed,
                                        amountOfPiecesCaptured,
                                        chessOpening,
                                        pgnString);
                                    setEntryIndex(-1);
                                }}>Update Entry</Button>
                                <Button variant="contained" onClick={() => {
                                    onClickDeleteEntry(entryIndex, dbData, setDbData);
                                    setEntryIndex(-1);
                                }}>Delete Entry</Button>
                                <div class="formComponents">
                                    <FormComponent label="ID: ">
                                        <select
                                            id="entryIndex"
                                            type="select"
                                            name="entryIndex"
                                            value={entryIndex}
                                            onChange={(event) => { setEntryIndex(event.target.value) }}
                                        >
                                            <option selected value={-1}> -- None -- </option>
                                            {dbData.map(entry =>
                                                <option key={entry.id} value={entry.id}>{entry.id}</option>
                                            )};
                                        </select>
                                    </FormComponent>
                                    <FormComponent label="Color Won: ">
                                        <select
                                            type="select"
                                            name="colorWon"
                                            value={colorWon}
                                            onChange={(event) => {
                                                setColorWon(event.target.value);
                                            }}
                                        >
                                            <option hidden disabled selected value="null"> -- Select an option -- </option>
                                            <option value="white">WHITE</option>
                                            <option value="black">BLACK</option>
                                            <option value="tie">TIE</option>
                                        </select>
                                    </FormComponent>
                                    <FormComponent label="Amount of Moves Played: ">
                                        <input name="amountOfMovesPlayed" type="text" pattern="[0-9]*" value={amountOfMovesPlayed} placeholder="Enter number here" onChange={(event) => {
                                            setAmountOfMovesPlayed(event.target.value);
                                        }} />
                                    </FormComponent>
                                    <FormComponent label="Amount of Pieces Captured: ">
                                        <input name="amountOfPiecesCaptured" type="text" pattern="[0-9]*" value={amountOfPiecesCaptured} placeholder="Enter number here" onChange={(event) => {
                                            setAmountOfPiecesCaptured(event.target.value);
                                        }} />
                                    </FormComponent>
                                    <FormComponent label="Chess Opening: ">
                                        <select
                                            type="select"
                                            name="chessOpening"
                                            value={chessOpening}
                                            onChange={(event) => {
                                                setChessOpening(event.target.value);
                                            }}
                                        >
                                            <option hidden disabled selected value="null"> -- Select an option -- </option>
                                            <option value="ruy_lopez">Ruy Lopez</option>
                                            <option value="polish">Polish</option>
                                            <option value="nimzovich_larsen">Nimzovich-Larsen</option>
                                            <option value="french_defense">French Defence</option>
                                            <option value="queens_gambit">Queens Gambit</option>
                                            <option value="kings_gambit">Kings Gambit</option>
                                            <option value="english">English</option>
                                            <option value="london">London</option>
                                            <option value="catalan">Catalan</option>
                                            <option value="kings_indian">Kings Indian Defence</option>
                                        </select>
                                    </FormComponent>
                                    <FormComponent label="PGN String: ">
                                        <textarea name="pgnString" placeholder="Please paste the PGN string here..." value={pgnString} onChange={(event) => {
                                            setPgnString(event.target.value);
                                        }}></textarea>
                                    </FormComponent>

                                    <input className="submit-button" type="submit" value="Submit Form" />
                                </div>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </div>

        </React.Fragment>
    );
}

export default AddData;