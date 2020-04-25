import React from 'react'
import LandingPage from './LandingPage'
import { Switch, Route } from 'react-router-dom'
import AboutMe from './AboutMe.js'
import Resume from './Resume.js'
import Contact from './Contact.js'
import Projects from './Projects.js'



const Main= () =>(
    <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={LandingPage}></Route>
        <Route exact path={process.env.PUBLIC_URL +'/AboutMe'} component={AboutMe}></Route>
        <Route exact path={process.env.PUBLIC_URL +'/Resume'} component={Resume}></Route>
        <Route exact path={process.env.PUBLIC_URL +'/Projects'} component={Projects}></Route>
        <Route exact path={process.env.PUBLIC_URL +'/Contact'} component={Contact}></Route>
    </Switch>
)

export default Main 



