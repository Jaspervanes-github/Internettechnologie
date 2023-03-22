import React from "react";
import './index.css';
import Chart from "react-apexcharts";

function PieChart(props) {
    return (
        <React.Fragment>
            <div className="pieChart">
            <label>{props.title}</label>
                        <Chart
                            options={{
                                labels: props.labels,
                                colors: props.colors,
                                legend: {
                                    fontSize: props.fontSize,
                                    fontWeight: 400,
                                    labels: {
                                        colors: ["#FFFFFF"],
                                    },
                                },
                            }}
                            series={props.data}
                            type="pie"
                            width="500"
                        />
            </div>
        </React.Fragment>
    );
}

export default PieChart;