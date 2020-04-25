import React from 'react'
import LandingPage from './LandingPage'
import { Switch, Route } from 'react-router-dom'
import AboutMe from './AboutMe.js'
import Resume from './Resume.js'
import Contact from './Contact.js'
import Projects from './Projects.js'



const Main= () =>(
    <Switch>
        <Route exact path='/LandingPage' component={LandingPage}></Route>
        <Route path='/AboutMe' component={AboutMe}></Route>
        <Route path='/Resume' component={Resume}></Route>
        <Route path='/Projects' component={Projects}></Route>
        <Route path='/Contact' component={Contact}></Route>
    </Switch>
)

export default Main 



