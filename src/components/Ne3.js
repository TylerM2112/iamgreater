import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';    

class Ne3 extends Component {
    constructor() {
        super();
        this.state = {
            question3: "Welcome Tyler! Please let us know what you are experiencing so that we may best assist you:",
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
                                <input type="checkbox" id="depression" name="interest" />
                                <label for="depression">Depression</label>
                            </div>
                            <div>
                                <input type="checkbox" id="anxiety" name="interest" />
                                <label for="anxiety">Anxiety</label>
                            </div>
                            <div>
                                <input type="checkbox" id="substance" name="interest" />
                                <label for="substance">Substance Abuse</label>
                            </div>
                            <div>
                                <input type="checkbox" id="other" name="interest" />
                                <label>Other</label>
                            </div>
                            <div>
                                <label for="otherInput">If other, please describe what you are experiencing as best as you can:</label>
                                <br />
                                <input id="otherInput" name="interest" value="Type here..." />
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