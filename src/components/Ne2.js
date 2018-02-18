import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';    

class Ne2 extends Component {
    constructor() {
        super();
        this.state = {
            question2: "Welcome Tyler! Please let us know what you are experiencing so that we may best assist you:",
        }
        this.changeLabel = this.changeLabel.bind(this)
    }

    changeLabel(e) {
        // this.document = window;
        if (document.getElementById(e).style.color !== "white") {
            document.getElementById(e).style.backgroundColor = "#3b3dcc";
            document.getElementById(e).style.color = "white";
        }    
        else {
            document.getElementById(e).style.backgroundColor = "white";
            document.getElementById(e).style.color = "black";
        }
    }
    render() {
        return (
            <div>
                <Header />
                <div className="questionairre">
                    <div className="q1">
                    <label className="qNum">2/4</label>
                            <label className="q"><strong>{this.state.question2}</strong></label>  
                        <br />
                        <div className="inputDiv2">
                        <label onClick={e=>this.changeLabel("q1")} class="qLabel" id ="q1">Depression</label>
                        <br />
                        <label onClick={e=>this.changeLabel("q2")} class="qLabel" id ="q2">Anxiety</label>
                        <br />
                        <label  onClick={e=>this.changeLabel("q3")} class="qLabel" id ="q3">Substance Abuse</label>
                        <br />
                        <label  onClick={e=>this.changeLabel("q4")} class="qLabel" id ="q4">Other</label>
                        <br />
                        <label for="otherInput">If other, please describe what you are experiencing as best as you can:</label>
                            <input className="qInput2" />
                        </div>

                            <Link to="/ne"><button className="nextBtn" type="submit">Back</button></Link>
                            <Link to="/ne3"><button type="submit" className="nextBtn">Next</button></Link>
                        {/* <fieldset>
                            <legend><strong>{this.state.question2}</strong></legend>
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
                            <Link to="/ne"><button type="submit">Back</button></Link>
                            <Link to="/ne3"><button type="submit">Next</button></Link>
                        </fieldset> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Ne2;