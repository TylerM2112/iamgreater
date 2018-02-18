import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';    

class Ne2 extends Component {
    constructor() {
        super();
        this.state = {
            question2: "Please provide a location:",
        }
    }
    render() {
        return (
            <div>
                <Header />
                <div className="questionairre">
                    <div className="q2">
                        <fieldset>
                            <legend><strong>{this.state.question2}</strong></legend>
                            <div>
                                <label>City:</label>
                                <input />
                            </div>
                            <div>
                                <label>State:</label>
                                <input />
                            </div>
                            <Link to="/ne3"><button type="submit">Next</button></Link>
                        </fieldset>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ne2;

