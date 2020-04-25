import React, {Component} from 'react'
import { Grid, Cell } from 'react-mdl'


import ParticlesContainer from './ParticlesContainer';
import { BrowserRouter as Router } from "react-router-dom";


class LandingPage extends Component{
    render(){
        return(
            <Router>
                <div className="particle-back"
                    style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to right, #b9b9ab, #215f00)"
                    }}
                >
                    <ParticlesContainer />
                    <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}
                    >
                    <div style={{width: '100%', marginTop: "500px"}}>

                    <Grid className="landing-grid">
                    <Cell col={12}>
                        {/* <img
                        src={avatar}
                        alt="avatar"
                        className="avatar-img"
                        /> */}

                        <div className="banner-text">
                        <h1>Hi, I am Mayank Patel</h1>

                        <hr/>

                    <p>HTML/CSS | Bootstrap | JavaScript | React | Flutter | Python | Flask | C/C++</p>

                    <div className="social-links">

                    {/* LinkedIn */}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>

                    {/* Github */}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                    </a>

                    {/* Freecodecamp */}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-free-code-camp" aria-hidden="true" />
                    </a>

                    {/* Youtube */}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-youtube-square" aria-hidden="true" />
                    </a>

                    </div>
                        </div>
                    </Cell>
                    </Grid>
                    </div>
                    </div>
                </div>
            </Router>
        )
    }

}

export default LandingPage


