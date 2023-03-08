import './App.css';
import Kysymys from './Kysymys';
import {useState} from 'react';
import {Button} from '@mui/material';


function App() {
    const [kysymykset, setKysymykset] = useState(0);
    const [vastausN, setVastausN] = useState(0);
    const [vastausW, setVastausW] = useState(0);
    const [vastausJono, setVastausJono] = useState(0);
    const [vastaukset, setVastaukset] = useState(0);
    const [i, setI] = useState(0);
    
    let a = i;
    let oikeaVastaus = 0;
    let latVastaus = 0;
    let lonVastaus = 0;

    const FormPalkki = () => {
        if (a == 2) {
            return (
                <div>
                    <input 
                    type="text" 
                    value={vastausJono}
                    onChange={e => setVastausJono(e.target.value)}></input>
                </div>
            );
        } else {
            return (
                <div>
                    <div>
                        <label>
                            Lat:
                            <select>
                                <option selected value="North">N</option>
                                <option value="South">S</option>
                            </select>
                            <input type="text" 
                            value={vastausN} 
                            onChange={e => setVastausN(e.target.value)}></input>
                        </label>
                    </div>
                    <div>
                        <label>
                            Lon:
                            <select>
                                <option selected value="East">E</option>
                                <option value="West">W</option>
                            </select>
                            <input type="text" 
                            value={vastausW} 
                            onChange={e => setVastausW(e.target.value)}></input>
                        </label>
                    </div>
                    <div>
                        <label>
                            Tai naatit jonona:
                            <input name="naattiJono" type="text"
                            value={vastausJono} 
                            onChange={e => setVastausJono(e.target.value)}></input>
                        </label>
                    </div>
                </div>
            );
        }
    }

    const KysymyksetEteenpain = () => {
            if (vastausJono == oikeaVastaus) {
                    
                    a++;
                    setI(a);
                    console.log(a);
                    setKysymykset(a);
                    setVastaukset(a);
            } else if (vastausN == latVastaus && vastausW == lonVastaus) {
                    
                    a++;
                    setI(a);
                    console.log(a);
                    setKysymykset(a);
                    setVastaukset(a);
            }
        }

   

        switch(vastaukset) {
            case 0:
                latVastaus = 10;
                lonVastaus = 10;
                oikeaVastaus = 60;
            break;

            case 1:
                latVastaus = 10;
                lonVastaus = 10;
                oikeaVastaus = 16;
            break;

            case 2:
                oikeaVastaus = "Sianliha";
            break;

            case 3:
                latVastaus = 10;
                lonVastaus = 10;
                oikeaVastaus = 44;
            break;

            case 4:
                latVastaus = 10;
                lonVastaus = 10;
                oikeaVastaus = 51;
            break;
        }

    return (
        <div>
            <Kysymys KysymyksetEteenpain={kysymykset}></Kysymys>


            <form>
                {FormPalkki()}
                <Button onClick={() => KysymyksetEteenpain()}>Primary</Button>
            </form>
        </div>
    );
}

export default App;
