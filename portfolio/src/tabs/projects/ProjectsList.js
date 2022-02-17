import React from "react";
import Battleship from "./Battleship";
import SteamAPI from "./SteamApi";
import Moonfall from "./Moonfall";
import Defaultview from "./DefaultView";
import Planner from "./Planner";

function ProjectOptions(props){
    console.log(props.items)
    const options = props.items.map(
        (item) => <option value={item.id}>{item.value}</option>
    );

    return(
        <select>
            {options}
        </select>
    );
}
function ProjectList(props){
    const projects = [
        {
            id: 0,
            value: "Select Project",
            view: <Defaultview />
        },
        {
            id: 1,
            value: "Battleship",
            view: <Battleship />
        },
        {
            id: 2,
            value: "Planner",
            view: <Planner />
        },
        {
            id: 3,
            value: "SteamAPI",
            view: <SteamAPI />
        },
        {
            id: 4,
            value: "Moonfall",
            view: <Moonfall />
        }
    ]
    return (<ProjectOptions items = {projects}/>)
}

export {ProjectOptions, ProjectList}