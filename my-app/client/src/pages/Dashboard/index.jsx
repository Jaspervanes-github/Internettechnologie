import React, { useEffect, useState } from "react";
import "./index.css";
import NavBar from "../../components/NavBar";
import { Grid } from "@material-ui/core";
import Chart from "react-apexcharts";
import { getAllDataFromDB } from "../../utils/dbQueries";


function calculateWinsPerColor(dbData) {
    let whiteCount = 0;
    let blackCount = 0;
    let tieCount = 0;
    dbData.forEach(data => {
        switch (data.colorWon) {
            case "white":
                whiteCount++;
                break;
            case "black":
                blackCount++;
                break;
            case "tie":
                tieCount++;
                break;
            default:
                break;
        }
    });

    return [whiteCount, blackCount, tieCount];
}

function calculateGamesPerOpening(dbData) {
    let data = [];
    let openings = [
        'ruy_lopez',
        'nimzovich_larsen',
        'french_defense',
        'queens_gambit',
        'kings_gambit',
        'english',
        'london',
        'catalan',
        'kings_indian'
    ];
    let count = 0;
    openings.forEach(opening => {
        dbData.forEach(data => {
            if (data.chessOpening === opening) {
                count++;
            }
        });
        data.push(count);
        count = 0;
    });
    return data;
}

function Dashboard() {
    const [dbData, setDbData] = useState([]);
    useEffect(() => {
        getAllDataFromDB(setDbData);
    });

    let amountOfMovesPlayed = 105;
    let amountOfPiecesCaptured = 27;
    let chessOpening = "Ruy Lopez";
    let winsPerColor = calculateWinsPerColor(dbData);
    let gamesPerOpening = calculateGamesPerOpening(dbData);

    return (
        <React.Fragment>
            <div className="Dashboard">
                <Grid container className="grid-container" spacing={1}>
                    <Grid item className="grid-navbar" xs={1}>
                        <NavBar />
                    </Grid>
                    <Grid item className="grid-content" xs={1}>
                        <h1>Dashboard is here</h1>
                        <label>Wins with color: </label>
                        <Chart
                            options={{
                                labels: ["White", "Black", "Tie"],
                                colors: ["#c9c9c9", "#18191a", "#6e6e6e"],
                                legend: {
                                    fontSize: "20px",
                                    fontWeight: 400,
                                    labels: {
                                        colors: ["#FFFFFF"],
                                    },
                                },
                            }}
                            series={winsPerColor}
                            type="pie"
                            width="500"
                        />
                        <p>Average amount of moves played per game: {amountOfMovesPlayed}</p>
                        <p>Average amount of moves played per game: {amountOfPiecesCaptured}</p>
                        <p>Most Played Chess Opening: {chessOpening}</p>
                        <label>Games played with opening: </label>
                        <Chart
                            options={{
                                labels: [
                                    "Ruy Lopez",
                                    "Polish",
                                    "Nimzovich-Larsen",
                                    "French Defence",
                                    "Queens Gambit",
                                    "Kings Gambit",
                                    "English",
                                    "London",
                                    "Catalan",
                                    "Kings Indian Defence"
                                ],
                                colors: [
                                    "#0F5257",
                                    "#1098F7",
                                    "#d7263d",
                                    "#f46036",
                                    "#a72608",
                                    "#88ccf1",
                                    "#353a47",
                                    "#2d898b",
                                    "#5f5980",
                                    "#08a045"
                                ],
                                legend: {
                                    fontSize: "12px",
                                    fontWeight: 400,
                                    labels: {
                                        colors: ["#FFFFFF"],
                                    },
                                },
                            }}
                            series={gamesPerOpening}
                            type="pie"
                            width="500"
                        />
                    </Grid>
                </Grid>
            </div>

        </React.Fragment>
    );
}

export default Dashboard;