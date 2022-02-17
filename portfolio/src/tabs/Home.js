import React, {useState} from "react";
import Battleship from "./projects/Battleship";
import Defaultview from "./projects/DefaultView";
import Planner from "./projects/Planner";
import SteamAPI from "./projects/SteamApi";
import Moonfall from "./projects/Moonfall";

function Home(props){
    const[viewcomp, setveiwcomp] = useState(0);
    const[fontsize, setfontsize] = useState(16);
    const styles = {
        'textAlign': 'center',
        'paddingLeft': '25%',
        'paddingRight': '25%',
        'fontSize': fontsize
    }

    const fontplus = () => { setfontsize(fontsize+1)}
    const fontminus = () => { setfontsize(fontsize-1)}

    let view = <Defaultview />;

    console.log(viewcomp);
    if(viewcomp == 1){
        view = <Battleship />;
        console.log("view set to battleship")
    }

    if(viewcomp == 2){
        view = <Planner />;
        console.log("view set to battleship")
    }

    if(viewcomp == 3){
        view = <SteamAPI />;
        console.log("view set to battleship")
    }

    if(viewcomp == 4){
        view = <Moonfall />;
        console.log("view set to battleship")
    }
    
    return(
        <div style={styles}>
            <p><a href='https://github.com/Natecat4444'>Github Profile</a></p>
            <hr />
            <form>
                <select name={viewcomp} onChange={(event) => setveiwcomp(event.target.value)}>
                    <option>Select Project</option>
                    <option name={viewcomp} value={1}>Battleship</option>
                    <option name={viewcomp} value={2}>Planner</option>
                    <option name={viewcomp} value={3}>SteamAPI</option>
                    <option name={viewcomp} value={4}>Moonfall</option>
                </select>
               
            </form>
            <br />

            {view}

            <hr />
            <footer>
                
                <p>Adjust font size</p>
                <button onClick={fontplus} className="btn btn-primary">+</button>
                <button onClick={fontminus} className="btn btn-danger">-</button>
            </footer>

        </div>
    );
}

export default Home;