import React, {Component} from 'react'
import { Grid, Cell } from 'react-mdl'
import avatar from './assets/img1.png';

class LandingPage extends Component{
    render(){
        return(
            <div style={{width:"100%", margin:'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img src={avatar} alt="avatar" className="avatar-img"/>
                        <div className="banner-text">
                            <h1>Full Stack Web-Developer</h1>
                            <hr/>
                            <p>HTML | CSS | Bootstrap | Javascript | ReactJS | Python | </p>
                            <div className="social-links">

                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                                </a>
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden="true"/>
                                </a>
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-twitter-square"  aria-hidden="true"/>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }

}

export default LandingPage