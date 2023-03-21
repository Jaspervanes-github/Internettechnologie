const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');


const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "password",
    database: "chessdatabase",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM chess_data";
    db.query(sqlSelect, (err, result) => {
        if (err)
            console.error(err);

        res.send(result);
    });
});

app.post("/api/insert", (req, res) => {
    const formData = req.body.formData;
    console.log("Formdata: " + formData);
    const sqlInsert = "INSERT INTO chess_data (colorWon, amountOfMovesPlayed, amountOfPiecesCaptured, chessOpening, pgnString, timestamp) VALUES (?, ?, ?, ?, ?, ?);";
    db.query(sqlInsert, [
        formData.colorWon,
        formData.amountOfMovesPlayed,
        formData.amountOfPiecesCaptured,
        formData.chessOpening,
        formData.pgnString,
        formData.timestamp],
        (err, result) => {
            if (err) {
                console.log("The value was: " + formData.colorWon);
                console.error(err);
            }
        });
});

app.delete("/api/delete/:id", (req, res) => {
    const id = req.params.id;

    const sqlDelete = "DELETE FROM chess_data WHERE id = (?)";
    db.query(sqlDelete, id, (err, result) => {
        if (err)
            console.error(err);
        console.log(result);
    });
});

app.put("/api/update", (req, res) => {
    const id = req.body.id;
    const formData = req.body.formData;

    const sqlUpdate = "UPDATE chess_data SET colorWon = (?), amountOfMovesPlayed = (?), amountOfPiecesCaptured = (?), chessOpening = (?), pgnString = (?), timestamp = (?) WHERE id = (?)";
    db.query(sqlUpdate, [
        formData.colorWon,
        formData.amountOfMovesPlayed,
        formData.amountOfPiecesCaptured,
        formData.chessOpening,
        formData.pgnString,
        formData.timestamp,
        id],
        (err, result) => {
            if (err)
                console.error(err);
        });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});