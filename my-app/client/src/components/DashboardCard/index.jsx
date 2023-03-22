import React from "react";
import './index.css';

function DashboardCard(props) {
    return (
        <React.Fragment>
            <div className="dashboardCard">
                {props.icon}
                <h3>{props.title}</h3>
                <label>{props.value}</label>
            </div>
        </React.Fragment>
    );
}

export default DashboardCard;
