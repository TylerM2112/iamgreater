import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';    

class Ne4 extends Component {
    constructor() {
        super();
        this.state = {
            question4: "4/4 What assistance can iamgreater offer you Tyler?"
        }
    }
    render() {
        return (
            <div>
                <Header />
                <div className="questionairre">
                <div className="q4">
                        <fieldset>
                            <legend><strong>{this.state.question4}</strong></legend>
                            <div>
                                <input type="checkbox" />
                                <label>Chat with an available specialist</label>
                            </div>
                            <div>
                            <input type="checkbox" />
                                <label>Find Local Resources</label>
                            </div>
                            <div>
                            <input type="checkbox" />
                                <label>Find Online Resources</label>
                            </div>
                            <Link to="/ne3"><button type="submit">Back</button></Link>
                            <Link to="/breathing"><button type="submit">Next</button></Link>
                        </fieldset>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ne4;