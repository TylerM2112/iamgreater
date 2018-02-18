import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

class Ne extends Component {
    constructor() {
        super();
        this.state = {
            question1: "Please tell us your first name:",
        }
    }
    render() {
        return (
            <div>
                <Header />
                <div className="questionairre">
                    <label className="qNum">1/4</label>
                    <label className="q"><strong>{this.state.question1}</strong></label> 
                    <input className="qInput" />
                    <Link to="/ne2"><button className="nextBtn" type="submit">Next</button></Link>

                    {/* <div className="q1">
                        <fieldset>
                            <legend><strong>{this.state.question1}</strong></legend>
                            <div>
                                <label>First name or alias:</label>
                                <input />
                            </div>
                            <div>
                                <Link to="/ne2"><button type="submit">Next</button></Link>
                            </div>
                        </fieldset>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Ne;

