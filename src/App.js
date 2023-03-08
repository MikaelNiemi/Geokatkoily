import './App.css';
import Kysymys from './Kysymys';
import {useState} from 'react';
import {Button} from '@mui/material';


function App() {
    const [kysymykset, setKysymykset] = useState(0);
    const [vastausN, setVastausN] = useState("");
    const [vastausW, setVastausW] = useState("");
    const [vastausJono, setVastausJono] = useState("");
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
                latVastaus = "60 59.615";
                lonVastaus = "022 20.182";
                oikeaVastaus = "60 59.615 022 20.182";
            break;

            case 1:
                latVastaus = "61 30.920";
                lonVastaus = "021 44.652";
                oikeaVastaus ="61 30.920 021 44.652";
            break;

            case 2:
                oikeaVastaus = "Sianliha";
            break;

            case 3:
                latVastaus = "60 59.312";
                lonVastaus = "022 30.132";
                oikeaVastaus = "60 59.312 022 30.132";
            break;

            case 4:
                latVastaus = "60 22.691";
                lonVastaus = "022 33.240";
                oikeaVastaus = "60 22.691 022 33.240";
            break;
        }

    return (
        <div>
            <Kysymys KysymyksetEteenpain={kysymykset}></Kysymys>


            <form>
                {FormPalkki()}
                <Button onClick={() => {
                    KysymyksetEteenpain();
                    setVastausN("");
                    setVastausW("");
                    setVastausJono("");
                    }}>Primary</Button>
            </form>
        </div>
    );
}

export default App;
