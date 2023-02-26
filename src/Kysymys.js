import './App.css';
import {useState} from 'react';

function Kysymys({KysymyksetEteenpain}) {
    let kysymys = "";

    switch(KysymyksetEteenpain) {
        case 0:
            kysymys = "Koordinaatit ovat muotoa:"
            + "\n"
            + "60° XX.XXX 022° XX.XXX"
            + "\n"
            + "Matti oli elämässään tavannut 20 upeata perhettä. Hän päätti tehdä heistä laulun. Rosenlewin perhe oli todella säkenöivä ja heidän kanssaan Matilla oli ollut aina hauskaa. Wasastjernan perheessä oli äiti, isä ja kaksi vallatonta lasta. Lapsien kanssa sattui ja tapahtui. Matilla ei ollut omia lapsia, joten heidän vilkkautensa ei häntä haitannut. Päinvastoin, hänestä oli hauska seurata lasten kommelluksia. Frenckell-perhe oli vielä hieman vieras. He olivat vielä tutustumisvaiheessa. Perheen isä oli klovni ja Matti kävi hänen esityksiään katsomassa aina kun voi. Björnbergit hän on tuntenut jo lapsesta asti. Heidän perheen äiti ja isä olivat hänen lapsuudenkavereitaan. Perhe oli hänelle kaikkein läheisin. Serlachiukset olivat muuttaneet ulkomailta ja heillä oli aina mukavia kertomuksia Afrikan viidakosta. Serlachius oli hyvin harvinainen nimi ja Matilla oli vaikeuksia ääntää nimi oikein. Virkkusten isä oli nimensä mukainen virkkunen. Isä heräsi kukonlaulun aikaan joka aamu. Onneksi hän ei silti soitellut Matille siihen aikoihin. Matti tykkäsi nukkua pitkään. Kaikkien nimiä ei tässä kohtaa nyt mainita. Viimeisin perhe pitää vielä mainita, sillä Waldenin perheen tytär menee naimisiin Matin siskonpojan kanssa. Se on Matille tärkeä asia, sillä siskonpoika on hänen kummipoikansa. Hän sisällyttää senkin asian lauluunsa. Laulu julkaistaan helmikuussa 2030. ";
        break;

        case 1:
            kysymys = "moi";
        break;

        case 2:
            kysymys = "testi";
        break;

        case 3:
            kysymys = "lisää";
        break;

        case 4:
            kysymys = "nonii";
        break;
    }
    
    return (
        <div>
            <p>{kysymys}</p>
        </div>
    );
}

export default Kysymys;