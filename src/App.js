import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import './App.css';
import Main from './components/Main.js';
import {Link} from 'react-router-dom'



 
class App extends Component{
  
  render(){
      return (
        <div>
        
                <Layout>
                <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/LandingPage">MyPortfolio</Link>} scroll>
                    <Navigation>
                        <Link to="/Resume">Resume</Link>
                        <Link to="/AboutMe"> AboutMe</Link>
                        <Link to="/Contact">Contact</Link>
                        <Link to="/Projects">Projects</Link>
                    </Navigation>
                </Header>
                    <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/LandingPage">MyPortfolio</Link>}>
                        <Navigation>
                            <Link to="/Resume">Resume</Link>
                            <Link to="/AboutMe"> AboutMe</Link>
                            <Link to="/Contact">Contact</Link>
                            <Link to="/Projects">Projects</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <h1>hjdsfhksdjfhdjfhjd</h1>
                        <Main/>               
                    </Content>
                </Layout>
         
        </div>
         
      );
  };

}

export default App



