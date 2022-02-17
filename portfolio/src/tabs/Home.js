import React, {useState} from "react";

function Battleship(props){
    return(<div>
        <a href="">Github Repo</a>
        <p></p>
    </div>)
}

function Planner(props){
    return(<div>
        <a href="">Github Repo</a>
        <p></p>
    </div>)
}

function SteamAPI(props){
    return(<div>
        <a href="">Github Repo</a>
        <p></p>
    </div>)
}

function Moonfall(props){
    return(<div>
        <a href="">Github Repo</a>
        <p></p>
    </div>)
}

function Defaultview(props){
    return(<div>
        <p>Please select a project for a description and dedicated link</p>
    </div>)
}

function Home(props){
    const[viewcomp, setveiwcomp] = useState(0);
    const styles = {
        'textAlign': 'center',
        'paddingLeft': '25%',
        'paddingRight': '25%'
    }

    const handleSubmit = (event) => {
        console.log("Handle sublit called")
        console.log(event)
        // setveiwcomp(viewcomp)
        console.log(viewcomp)
        event.preventDefault();

    }

    let view = <Defaultview />;

    console.log(viewcomp);
    if(viewcomp == 1){

    }
    
    return(
        <div style={styles}>
            <p><a href='https://github.com/Natecat4444'>Github Profile</a></p>
            <form onSubmit={handleSubmit}>
                <select name={viewcomp} onChange={(event) => setveiwcomp(event.target.value)}>
                    <option value={1}>Battleship</option>
                    <option value={2}>Planner</option>
                    <option value={3}>SteamAPI</option>
                    <option value={4}>Moonfall</option>
                </select>
                <button type="submit">View Project</button>
            </form>

            {view}

        </div>
    );
}

export default Home;