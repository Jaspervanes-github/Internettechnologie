import React, { useEffect, useState } from "react";
import "./index.css";
import NavBar from "../../components/NavBar";
import { Grid } from "@material-ui/core";
import { getAllDataFromDB } from "../../utils/dbQueries";
import DashboardCard from "../../components/DashboardCard";
import PieChart from "../../components/PieChart";


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

function calculateAverageMovesPlayed(dbData) {
    let total = 0;
    dbData.forEach(data => {
        total += data.amountOfMovesPlayed;
    });
    return (total / dbData.length);
}

function calculateAveragePiecesCaptured(dbData) {
    let total = 0;
    dbData.forEach(data => {
        total += data.amountOfPiecesCaptured;
    });
    return (total / dbData.length);
}

function calculateHighestOccurence(array) {
    let indexOfHighest = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[indexOfHighest]) {
            indexOfHighest = i;
        }
    }
    return indexOfHighest;
}

function Dashboard() {
    const [dbData, setDbData] = useState([]);
    useEffect(() => {
        getAllDataFromDB(setDbData);
    }, []);

    let openingsArray = [
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
    ];
    let colorArray = ["White", "Black", "Tie"];
    let winsPerColor = calculateWinsPerColor(dbData);
    let gamesPerOpening = calculateGamesPerOpening(dbData);
    let amountOfMovesPlayed = calculateAverageMovesPlayed(dbData);
    let amountOfPiecesCaptured = calculateAveragePiecesCaptured(dbData);
    let mostPopularChessOpening = openingsArray[calculateHighestOccurence(gamesPerOpening)];
    let mostWinsColor = colorArray[calculateHighestOccurence(winsPerColor)];

    if (!dbData) return <div>Loading...</div>;
    return (
        <React.Fragment>
            <div className="Dashboard">
                <Grid container className="grid-container" spacing={1}>
                    <Grid item className="grid-navbar" xs={1}>
                        <NavBar />
                    </Grid>
                    <Grid item className="grid-content" xs={1}>
                        <div class="container">
                            <div class="item1">
                                <DashboardCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M2 2h20v20H2V2zm2 2v4h4v4H4v4h4v4h4v-4h4v4h4v-4h-4v-4h4V8h-4V4h-4v4H8V4H4zm8 8H8v4h4v-4zm0-4v4h4V8h-4z" /></svg>}
                                    title="Average amount of moves played per game: " value={amountOfMovesPlayed}></DashboardCard>
                            </div>
                            <div class="item2">
                                <DashboardCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M0 0h24v24H0z" /><path fill="currentColor" d="M12 2a4 4 0 0 1 4 4a5.03 5.03 0 0 1-.438 2.001L16 8a1 1 0 0 1 .117 1.993L16 10h-1.263l1.24 5.79a1 1 0 0 1-.747 1.184l-.113.02L15 17H9a1 1 0 0 1-.996-1.093l.018-.117L9.262 10H8a1 1 0 0 1-.117-1.993L8 8h.438a5.154 5.154 0 0 1-.412-1.525l-.02-.259L8 6a4 4 0 0 1 4-4zm6 16H6a1 1 0 0 0-1 1a2 2 0 0 0 2 2h10a2 2 0 0 0 1.987-1.768l.011-.174A1 1 0 0 0 18 18z" /></g></svg>}
                                    title="Average amount of pieces captured per game: " value={amountOfPiecesCaptured}></DashboardCard>
                            </div>
                            <div class="item3">
                                <DashboardCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512"><path fill="currentColor" d="M144 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v32H60.2C49.1 96 40 105.1 40 116.2c0 2.5.5 4.9 1.3 7.3L73.8 208H72c-13.3 0-24 10.7-24 24s10.7 24 24 24h4L60 384h136l-16-128h4c13.3 0 24-10.7 24-24s-10.7-24-24-24h-1.8l32.5-84.5c.9-2.3 1.3-4.8 1.3-7.3c0-11.2-9.1-20.2-20.2-20.2H144V64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V16zM48 416L4.8 473.6C1.7 477.8 0 482.8 0 488c0 13.3 10.7 24 24 24h208c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L208 416H48zm288 0l-43.2 57.6c-3.1 4.2-4.8 9.2-4.8 14.4c0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L464 416H336zm-32-208v51.9c0 7.8 2.8 15.3 8 21.1l27.2 31l-2.2 72h125.5l-3.3-72l28.3-30.8c5.4-5.9 8.5-13.6 8.5-21.7V208c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v16h-24v-16c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v16h-24v-16c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16zm80 96c0-8.8 7.2-16 16-16s16 7.2 16 16v32h-32v-32z" /></svg>}
                                    title="Most Popular Chess Opening: " value={mostPopularChessOpening}></DashboardCard>
                            </div>
                            <div class="item4">
                                <DashboardCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M0 0h24v24H0z" /><path fill="currentColor" d="M12 2a4 4 0 0 1 4 4a5.03 5.03 0 0 1-.438 2.001L16 8a1 1 0 0 1 .117 1.993L16 10h-1.263l1.24 5.79a1 1 0 0 1-.747 1.184l-.113.02L15 17H9a1 1 0 0 1-.996-1.093l.018-.117L9.262 10H8a1 1 0 0 1-.117-1.993L8 8h.438a5.154 5.154 0 0 1-.412-1.525l-.02-.259L8 6a4 4 0 0 1 4-4zm6 16H6a1 1 0 0 0-1 1a2 2 0 0 0 2 2h10a2 2 0 0 0 1.987-1.768l.011-.174A1 1 0 0 0 18 18z" /></g></svg>}
                                    title="Average amount of pieces captured per game: " value={amountOfPiecesCaptured}></DashboardCard>
                            </div>
                            <div class="item5">
                                <DashboardCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512"><path fill="currentColor" d="M144 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v32H60.2C49.1 96 40 105.1 40 116.2c0 2.5.5 4.9 1.3 7.3L73.8 208H72c-13.3 0-24 10.7-24 24s10.7 24 24 24h4L60 384h136l-16-128h4c13.3 0 24-10.7 24-24s-10.7-24-24-24h-1.8l32.5-84.5c.9-2.3 1.3-4.8 1.3-7.3c0-11.2-9.1-20.2-20.2-20.2H144V64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V16zM48 416L4.8 473.6C1.7 477.8 0 482.8 0 488c0 13.3 10.7 24 24 24h208c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L208 416H48zm288 0l-43.2 57.6c-3.1 4.2-4.8 9.2-4.8 14.4c0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L464 416H336zm-32-208v51.9c0 7.8 2.8 15.3 8 21.1l27.2 31l-2.2 72h125.5l-3.3-72l28.3-30.8c5.4-5.9 8.5-13.6 8.5-21.7V208c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v16h-24v-16c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v16h-24v-16c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16zm80 96c0-8.8 7.2-16 16-16s16 7.2 16 16v32h-32v-32z" /></svg>}
                                    title="Most wins with: " value={mostWinsColor}></DashboardCard>
                            </div>
                            <div class="item6">
                                <PieChart
                                    title="Wins per color: "
                                    labels={
                                        colorArray
                                    }
                                    colors={
                                        ["#c9c9c9", "#18191a", "#6e6e6e"]
                                    }
                                    fontSize="20px"
                                    data={winsPerColor}
                                />
                            </div>
                            <div class="item7">
                                <PieChart title="Games played with opening: " labels={openingsArray} colors={
                                    [
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
                                    ]
                                }
                                    fontSize="12px"
                                    data={gamesPerOpening}
                                />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>

        </React.Fragment>
    );
}

export default Dashboard;