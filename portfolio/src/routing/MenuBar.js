import React from "react";
import {Button} from 'react-bootstrap';

function MenuBar(){
    return(
        <div >
            <ul id="navbar">
                <li><Button variant='link'><a href="/">Home</a></Button></li>
                <li><Button variant='link'><a href="/About">About</a></Button></li>
                <li><Button variant='link'><a href="/Contact">Contact</a></Button></li>
            </ul>
        </div>
    )
}

export default MenuBar;