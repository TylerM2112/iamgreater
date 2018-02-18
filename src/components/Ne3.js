import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';    

class Ne3 extends Component {
    constructor() {
        super();
        this.state = {
            question3: "Tyler, please provide a location:",
        }
    }
    render() {
        return (
            <div>
                <Header />
                <div className="questionairre">
                    <div className="q3">
                        <fieldset>
                            <legend><strong>{this.state.question3}</strong></legend>
                            <div>
                                <label>City:</label>
                                <input />
                            </div>
                            <div>
                                <label>State:</label>
                                <input />
                            </div>
                            <Link to="/ne4"><button type="submit">Next</button></Link>
                        </fieldset>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ne3;

