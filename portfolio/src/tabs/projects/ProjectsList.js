import React, {useState} from "react";
import Battleship from "./Battleship";
import SteamAPI from "./SteamApi";
import Moonfall from "./Moonfall";
import Defaultview from "./DefaultView";
import Planner from "./Planner";

function ProjectOptions(props){
    console.log("Viewhandler: "+props.viewhandler)
    console.log("Name: "+props.name)
    console.log("Test: "+props.settest)
    console.log("props: "+props)
    const options = props.items.map(
        (item) => <option value={item.id} name={props.name} key={item.id}>{item.value}</option>
    );

    return(
        <select name = {props.name} onChange={(event) => props.viewhandler(event.target.value)}>
            {options}
        </select>
    );
}
function ProjectList(props){
    const projects = [
        {
            id: 0,
            key: 0,
            value: "Select Project",
            view: <Defaultview />
        },
        {
            id: 1,
            key: 1,
            value: "Battleship",
            view: <Battleship />
        },
        {
            id: 2,
            key: 2,
            value: "Planner",
            view: <Planner />
        },
        {
            id: 3,
            key: 3,
            value: "SteamAPI",
            view: <SteamAPI />
        },
        {
            id: 4,
            key: 4,
            value: "Moonfall",
            view: <Moonfall />
        }
    ]
    return (<ProjectOptions name={props.name} settest={props.settest} viewhandler = {props.viewhandler} items = {projects}/>)
}

export {ProjectOptions, ProjectList}