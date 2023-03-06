import React from "react";
import NavBar from "../../components/NavBar";

function No_Page() {
    return (
        <React.Fragment>
            <NavBar />
            <h1>Error 404: Page Not Found</h1>
            <h3>Something went wrong...</h3>
        </React.Fragment>
    );
}

export default No_Page;