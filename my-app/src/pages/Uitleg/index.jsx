import React from "react";
import "./index.css";
import NavBar from "../../components/NavBar";
import { Grid } from "@material-ui/core";
import TextBox from "../../components/TextBox";

function Uitleg() {
    return (
        <React.Fragment>
            <div className="Uitleg">
                <Grid container className="grid-container" spacing={1}>
                    <Grid item className="grid-navbar" xs={1}>
                        <NavBar />
                    </Grid>
                    <Grid item className="grid-content" xs={1}>
                        <h1>Uitleg</h1>
                        <TextBox head="Globale Uitleg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt sem a tincidunt finibus.
                            Mauris iaculis sed sem vel interdum. Nullam ultricies sodales velit. Donec accumsan eleifend ultricies.
                            Nulla nec magna sem. Integer in magna vel magna volutpat eleifend. Integer at nunc a massa gravida luctus
                            ac sed quam. Quisque ut auctor tellus. Sed tincidunt ornare purus, finibus finibus turpis feugiat accumsan.
                            Mauris ultrices sollicitudin ornare. Morbi non aliquet justo.
                        </TextBox>
                        <TextBox head="Schaakbord">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt sem a tincidunt finibus.
                            Mauris iaculis sed sem vel interdum. Nullam ultricies sodales velit. Donec accumsan eleifend ultricies.
                            Nulla nec magna sem. Integer in magna vel magna volutpat eleifend. Integer at nunc a massa gravida luctus
                            ac sed quam. Quisque ut auctor tellus. Sed tincidunt ornare purus, finibus finibus turpis feugiat accumsan.
                            Mauris ultrices sollicitudin ornare. Morbi non aliquet justo.
                        </TextBox>
                        <TextBox head="Spelers">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt sem a tincidunt finibus.
                            Mauris iaculis sed sem vel interdum. Nullam ultricies sodales velit. Donec accumsan eleifend ultricies.
                            Nulla nec magna sem. Integer in magna vel magna volutpat eleifend. Integer at nunc a massa gravida luctus
                            ac sed quam. Quisque ut auctor tellus. Sed tincidunt ornare purus, finibus finibus turpis feugiat accumsan.
                            Mauris ultrices sollicitudin ornare. Morbi non aliquet justo.
                        </TextBox>
                        <TextBox head="Koning">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt sem a tincidunt finibus.
                            Mauris iaculis sed sem vel interdum. Nullam ultricies sodales velit. Donec accumsan eleifend ultricies.
                            Nulla nec magna sem. Integer in magna vel magna volutpat eleifend. Integer at nunc a massa gravida luctus
                            ac sed quam. Quisque ut auctor tellus. Sed tincidunt ornare purus, finibus finibus turpis feugiat accumsan.
                            Mauris ultrices sollicitudin ornare. Morbi non aliquet justo.
                        </TextBox>
                        <TextBox head="Koningin">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt sem a tincidunt finibus.
                            Mauris iaculis sed sem vel interdum. Nullam ultricies sodales velit. Donec accumsan eleifend ultricies.
                            Nulla nec magna sem. Integer in magna vel magna volutpat eleifend. Integer at nunc a massa gravida luctus
                            ac sed quam. Quisque ut auctor tellus. Sed tincidunt ornare purus, finibus finibus turpis feugiat accumsan.
                            Mauris ultrices sollicitudin ornare. Morbi non aliquet justo.
                        </TextBox>
                        <TextBox head="Toren">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt sem a tincidunt finibus.
                            Mauris iaculis sed sem vel interdum. Nullam ultricies sodales velit. Donec accumsan eleifend ultricies.
                            Nulla nec magna sem. Integer in magna vel magna volutpat eleifend. Integer at nunc a massa gravida luctus
                            ac sed quam. Quisque ut auctor tellus. Sed tincidunt ornare purus, finibus finibus turpis feugiat accumsan.
                            Mauris ultrices sollicitudin ornare. Morbi non aliquet justo.
                        </TextBox>
                        <TextBox head="Loper">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt sem a tincidunt finibus.
                            Mauris iaculis sed sem vel interdum. Nullam ultricies sodales velit. Donec accumsan eleifend ultricies.
                            Nulla nec magna sem. Integer in magna vel magna volutpat eleifend. Integer at nunc a massa gravida luctus
                            ac sed quam. Quisque ut auctor tellus. Sed tincidunt ornare purus, finibus finibus turpis feugiat accumsan.
                            Mauris ultrices sollicitudin ornare. Morbi non aliquet justo.
                        </TextBox>
                        <TextBox head="Paard">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt sem a tincidunt finibus.
                            Mauris iaculis sed sem vel interdum. Nullam ultricies sodales velit. Donec accumsan eleifend ultricies.
                            Nulla nec magna sem. Integer in magna vel magna volutpat eleifend. Integer at nunc a massa gravida luctus
                            ac sed quam. Quisque ut auctor tellus. Sed tincidunt ornare purus, finibus finibus turpis feugiat accumsan.
                            Mauris ultrices sollicitudin ornare. Morbi non aliquet justo.
                        </TextBox>
                        <TextBox head="Pion">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt sem a tincidunt finibus.
                            Mauris iaculis sed sem vel interdum. Nullam ultricies sodales velit. Donec accumsan eleifend ultricies.
                            Nulla nec magna sem. Integer in magna vel magna volutpat eleifend. Integer at nunc a massa gravida luctus
                            ac sed quam. Quisque ut auctor tellus. Sed tincidunt ornare purus, finibus finibus turpis feugiat accumsan.
                            Mauris ultrices sollicitudin ornare. Morbi non aliquet justo.
                        </TextBox>
                        
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}

export default Uitleg;