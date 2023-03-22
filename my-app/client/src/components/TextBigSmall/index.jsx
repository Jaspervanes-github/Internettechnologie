import React from "react";
import './index.css'


function TextBigSmall(props) {
    return (
        <div class="textBigSmall">
            <h4>{props.bigText}</h4> <h5>{props.smallText}</h5>
        </div>
    );
}

export default TextBigSmall;