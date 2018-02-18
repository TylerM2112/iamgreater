import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';    

class Ne4 extends Component {
    constructor() {
        super();
        this.state = {
            question4: "What assistance can iamgreater offer you Tyler?"
        }
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
                    <div className="q4">
                <label className="qNum">4/4</label>        
                        <label className="q"><strong>{this.state.question4}</strong></label>
                            <div>

                                <label className="qLabel" id="q4" onClick={e=>this.changeLabel("q4")}>Chat with an available specialist</label>
                            </div>
                            <div>

                                <label className="qLabel" id="q5"onClick={e=>this.changeLabel("q5")}>Find Local Resources</label>
                            </div>
                            <div>

                                <label className="qLabel" id="q6" onClick={e=>this.changeLabel("q6")}>Find Online Resources</label>
                            </div>
                            <Link to="/ne3"><button type="submit" className="nextBtn">Back</button></Link>
                            <a href="http://localhost:3005"><button type="submit" className="nextBtn">Next</button></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ne4;