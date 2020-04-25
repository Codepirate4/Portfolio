import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import './App.css';
import Main from './components/Main';
import {Link} from 'react-router-dom'



 
class App extends Component{
  
  render(){
      return (
        <div>
        
                <Layout>
                <Header className="header-Color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
                    <Navigation>
                        <Link to="/Resume">Resume</Link>
                        <Link to="/AboutMe"> AboutMe</Link>
                        <Link to="/Contact">Contact</Link>
                        <Link to="/Projects">Projects</Link>
                    </Navigation>
                </Header>
                    <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
                        <Navigation>
                            <Link to="/Resume">Resume</Link>
                            <Link to="/AboutMe"> AboutMe</Link>
                            <Link to="/Contact">Contact</Link>
                            <Link to="/Projects">Projects</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <Main/>               
                    </Content>
                </Layout>
         
        </div>
         
      );
  };

}

export default App



