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
<<<<<<< HEAD
                <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/Resume">MyPortfolio</Link>} scroll>
=======
                <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
>>>>>>> 106435acb0c4706b56ce31bc978576adc58a7841
                    <Navigation>
                        <Link to="/Resume">Resume</Link>
                        <Link to="/AboutMe"> AboutMe</Link>
                        <Link to="/Contact">Contact</Link>
                        <Link to="/Projects">Projects</Link>
                    </Navigation>
                </Header>
<<<<<<< HEAD
                    <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/Resume">MyPortfolio</Link>}>
=======
                    <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
>>>>>>> 106435acb0c4706b56ce31bc978576adc58a7841
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



