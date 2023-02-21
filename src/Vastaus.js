import './App.css';

function Vastaus() {

    return (
        <form>
            <div>
                <label>
                    Lat:
                    <select>
                        <option selected value="North">N</option>
                        <option value="South">S</option>
                    </select>
                    <input type="number"></input>
                    <input type="number"></input>
                    <input type="number"></input>
                </label>
            </div>
            <div>
                <label>
                    Lon:
                    <select>
                        <option selected value="East">E</option>
                        <option value="West">W</option>
                    </select>
                    <input type="number"></input>
                    <input type="number"></input>
                    <input type="number"></input>
                </label>
            </div>
            <div>
                <label>
                    Tai naatit jonona:
                    <input></input>
                </label>
            </div>
            <input type="submit" value={"Tarkasta"}></input>
        </form>
    );
}

export default Vastaus;