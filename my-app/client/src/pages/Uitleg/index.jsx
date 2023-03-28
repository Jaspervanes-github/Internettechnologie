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
                        <TextBox head="Globale Uitleg">
                            Schaken is een eeuwenoud bordspel dat over de hele wereld wordt gespeeld en geliefds is bij miljoenen mensen van alle leeftijden en achtergronden.
                            Het spel wordt gespeeld op een bord met 64 vakjes en bestaat uit 32 stukken, elk met zijn eigen speciale bewegingspatronen en waarde.
                            Het doel van het spel is om de koning van de tegenstander schaakmat te zetten, wat betekent dat de koning wordt bedreigd door een aanval die niet kan worden tegengegaan.
                        </TextBox>
                        <TextBox head="Schaakbord">
                            Het schaakbord is een vierkant bord dat gebruikt wordt bij het schaakspel. Het bord bestaat uit 64 gelijke vierkantjes, afwisselend in de kleuren zwart en wit.
                            Elke speler begint het spel met 16 stukken, bestaande uit acht pionnen, twee paarden, twee lopers, twee torens, een koning en een koningin.
                            Het doel van het spel is om de koning van de tegenstander schaakmat te zetten, wat betekent dat de koning aangevallen wordt en er geen manier meer is om te ontsnappen aan de dreiging.
                            Het schaakbord wordt vaak gebruikt als metafoor voor strategische situaties waarbij elk besluit van cruciaal belang is en er altijd een winnaar en een verliezer is.
                        </TextBox>
                        <TextBox head="Koning">
                            De koning is het belangrijkste stuk op het schaakbord en het doel van het spel is om de koning van de tegenstander schaakmat te zetten.
                            De koning kan in alle richtingen bewegen, maar slechts één veld per zet. De koning wordt vaak gebruikt om zichzelf te beschermen en moet in veiligheid worden gehouden.
                            Als de koning wordt aangevallen, moet hij zich verplaatsen naar een veilig veld of worden beschermd door andere stukken. De koning kan nooit in schaak blijven staan en mag
                            niet worden verplaatst naar een veld waar hij direct wordt aangevallen. Het is belangrijk om de koning te beschermen en om hem in het midden van het bord te houden tijdens het middenspel.
                            In het eindspel kan de koning echter een belangrijke rol spelen en zelfs helpen bij het winnen van het spel.
                        </TextBox>
                        <TextBox head="Koningin">
                            De dame is het krachtigste stuk op het schaakbord en kan in elke richting bewegen, horizontaal, verticaal of diagonaal.
                            De dame wordt vaak gebruikt om aanvallen te lanceren en kan een belangrijke rol spelen bij het controleren van het centrum van het bord.
                            Het is belangrijk om de dame te beschermen omdat het verlies van de dame vaak het einde van het spel betekent.
                            Omdat de dame zo krachtig is, moet het met zorg worden gebruikt en moet men voorkomen dat het in de val wordt gelokt.
                        </TextBox>
                        <TextBox head="Toren">
                            De toren is een krachtig stuk dat in een rechte lijn kan bewegen, zowel horizontaal als verticaal. Het is een belangrijk stuk in het middenspel
                            en kan vaak worden gebruikt om de koning van de tegenstander onder druk te zetten. De toren wordt vaak gebruikt om de open lijnen te beheersen en
                            kan worden gebruikt om andere stukken te beschermen. Het is belangrijk om de torens samen te werken en te coördineren om optimaal gebruik te maken van hun potentieel.
                            Een paar torens op de zevende rij kunnen bijvoorbeeld een sterke druk op de vijandelijke stelling uitoefenen.
                        </TextBox>
                        <TextBox head="Loper">
                            De loper is een schaakstuk dat diagonaal over het bord beweegt en alleen op de kleur van het vakje kan blijven waarop hij begint.
                            Er zijn twee lopers per speler, een op een licht vakje en een op een donker vakje. Lopers kunnen zich snel over het bord bewegen en
                            zijn daarom handig om in te zetten voor aanvallen op de koning van de tegenstander.
                            Een loper kan echter geen stukken overslaan en is daarom soms beperkt in zijn beweging.
                        </TextBox>
                        <TextBox head="Paard">
                            Het paard is een uniek schaakstuk omdat het over andere stukken kan springen en daarom een ​​belangrijk hulpmiddel
                            is om verdedigings- en aanvalstactieken te creëren. Het paard kan zich bewegen in een L-vorm, twee vakjes in de ene richting
                            en vervolgens één vakje loodrecht daarop. Het is belangrijk om het paard goed te gebruiken, omdat het kan worden gehinderd door
                            eigen pionnen en andere stukken op het bord.
                        </TextBox>
                        <TextBox head="Pion">
                            De pion is het kleinste schaakstuk en heeft beperkte bewegingsmogelijkheden. Een pion kan alleen vooruit bewegen,
                            één of twee vakjes bij de eerste zet, en vervolgens één vakje bij elke zet daarna. Pionnen zijn cruciaal voor het controleren van het midden van het
                            bord en het creëren van ruimte voor andere stukken om zich te bewegen. Als een pion de overkant van het bord bereikt, kan deze worden gepromoveerd tot een ander stuk,
                            behalve de koning.
                        </TextBox>

                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}

export default Uitleg;