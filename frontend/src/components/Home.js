import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {}
        }
    }

    sendData = (e) => {
        e.preventDefault();
        const doc = document.getElementsByClassName("inputs");
        const newUser = {
            "name": doc[0].value,
            "email": doc[1].value,
            "dob": doc[2].value,
            "occupation": doc[3].value,
            "city": doc[4].value 
        };
        this.setState({user: newUser});
        fetch("/enroll", {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then((error) => {
            if (error.status === 406)
            {
                alert(`${this.state.user.email} is already enrolled`)
            }
            else
            {
                alert(`${this.state.user.name} enrolled`);
            }
        })
        .catch((err) => {alert(`Error: ${err}`);}); 
    }    
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="header">
                        <h1>Enrollment Form</h1>
                    </div>
                    <form onSubmit={(event) => {this.sendData(event)}}>
                        <input className="inputs" placeholder="Name" type="text" required />
                        <input className="inputs" placeholder="Email" type="email" required />
                        <input className="inputs" placeholder="Date-Of-Birth" type="date" required />
                        <select className="inputs" required >
                            <option>Student</option>
                            <option>Professor/Teacher</option>
                            <option>IT Professional</option>
                            <option>Govt. Servant</option>
                            <option>Other</option>
                        </select>
                        <input className="inputs" placeholder="City" type="text" required />
                        <input className="submit" placeholder="Enroll" type="submit" />
                    </form>
                </div>                
            </div>
        )
    }
}
