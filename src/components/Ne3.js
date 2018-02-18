import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';    

class Ne3 extends Component {
    constructor() {
        super();
        this.state = {
            question3: "3/4 Tyler, please provide a location:",
        }
    }
    render() {
        return (
            <div>
                <Header />
                <div className="questionairre">
                    
                    <div className="q1">
                    <label className="qNum">2/4</label>
                            <label className="q"><strong>{this.state.question3}</strong></label>
                            <br />
                            <div>
                                <label className="qLabel">City:</label>
                                <input className="qInput2"/>
                            </div>
                            <div>
                                <label className="qLabel">State:</label>
                                <input className="qInput2"/>
                            </div>
                            <Link to="/ne2"><button type="submit" className="nextBtn">Back</button></Link>
                            <Link to="/ne4"><button type="submit" className="nextBtn">Next</button></Link>

                    </div>
            </div>
            </div>    
        )
    }
}

export default Ne3;

