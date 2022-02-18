import React, {Component} from 'react';


class Contact extends Component{
    constructor(props){
        super();
        this.state = {
            method: "Please select a contact method",
            msg: ""
        }

        this.contact = this.contact.bind(this);
    }
    contact(cmethod){
        this.setState(
            state =>({
                method: cmethod,
            })
        )
    }

    componentDidUpdate(){

    }

    render(){
        
    return(
        <div>
            <button className="btn btn-primary" onClick={ (e) => {this.contact("nkaufman1998@gmail.com")}}>Email</button>
            <button className="btn btn-success" onClick={ (e) => {this.contact("Please use email to aquire cell number at this time")}}>Phone</button>
            <p>{this.state.method}</p>
            <p>{this.state.msg}</p>
            
        </div>
    );
    }
}

export default Contact;