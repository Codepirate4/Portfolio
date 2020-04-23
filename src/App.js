import React from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import './App.css';
import Main from './components/Main';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="demo-big-content">
        <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
                <Navigation>
                    <Link to="/Resume">Resume</Link>
                    <Link to="/AboutMe"> AboutMe</Link>
                    <Link to="/Contact">Contact</Link>
                    <Link to="Projects">Projects</Link>
                </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
                <Navigation>
                  <Link to="/Resume">Resume</Link>
                  <Link to="/AboutMe"> AboutMe</Link>
                  <Link to="/Contact">Contact</Link>
                  <Link to="Projects">Projects</Link>
                </Navigation>
            </Drawer>
            <Content>
                <Main/>               
            </Content>
        </Layout>
    </div>
  );
}

export default App;
