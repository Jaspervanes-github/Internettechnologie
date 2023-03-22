import React from "react";
import './index.css';
import Chart from "react-apexcharts";

function PieChart(props) {
    return (
        <React.Fragment>
            <div className="pieChart">
            <label class="item1">{props.title}</label>
                        <Chart
                        class="item2"
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