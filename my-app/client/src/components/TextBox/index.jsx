import React from "react";
import "./index.css";


function TextBox(props) {
    return (
        <React.Fragment>
            <div className="TextBox">
                <h3>{props.head}</h3>
                <p>{props.children}
                </p>
            </div>
        </React.Fragment>

    );
}

export default TextBox;
