import React from "react";
import './index.css';

function FormComponent(props) {
    return (
        <React.Fragment>
            <div className="formComponent">
                <label>{props.label}</label>
                {props.children}
            </div>
        </React.Fragment>
    );
}

export default FormComponent;