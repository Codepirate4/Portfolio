import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import MayankCard from "./MayankCard"

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div  style={{width:"100%"}}>
          <Grid>
            <Cell col={4} tablet={12} phone={12}>
              <MayankCard
                    projectTitle = "My Portfolio"
                    projectDesciption = "this is my project"
                    projectImg = ""
                    githubLink = ""   githubDisabled = {true}
                    liveDemoLink = ""  liveDemoDisabled = {true}
                    Bcolor = {"blue"}
              />
            </Cell>
            <Cell col={4} tablet={12} phone={12}>
              <MayankCard
                    projectTitle = "Jumping Dino"
                    projectDesciption = "this is my project"
                    projectImg = ""
                    githubLink = ""   githubDisabled = {true}
                    liveDemoLink = ""  liveDemoDisabled = {true}
                    Bcolor = {"blue"}
              />
            </Cell>
            <Cell col={4} tablet={12} phone={12}>
            <MayankCard
                    projectTitle = "Smart-Bin"
                    projectDesciption = "this is my project"
                    projectImg = ""
                    githubLink = ""   githubDisabled = {true}
                    liveDemoLink = ""  liveDemoDisabled = {true}
                    Bcolor = {"blue"}
            />
            </Cell>
          </Grid>
          <Grid>
            <Cell col={4} tablet={12} phone={12}>
              <MayankCard
                    projectTitle = "Student Mentor"
                    projectDesciption = "this is my project"
                    projectImg = ""
                    githubLink = ""   githubDisabled = {true}
                    liveDemoLink = ""  liveDemoDisabled = {true}
                    Bcolor = {"blue"}
              />
            </Cell>
            <Cell col={4} tablet={12} phone={12}>
              <MayankCard
                    projectTitle = "Certi-Gen"
                    projectDesciption = "this is my project"
                    projectImg = ""
                    githubLink = ""   githubDisabled = {true}
                    liveDemoLink = ""  liveDemoDisabled = {true}
                    Bcolor = {"blue"}
              />
            </Cell>
            <Cell col={4} tablet={12} phone={12}>
              <MayankCard
                      projectTitle = "Certi-Gen"
                      projectDesciption = "this is my project"
                      projectImg = ""
                      githubLink = ""   githubDisabled = {true}
                      liveDemoLink = ""  liveDemoDisabled = {true}
                      Bcolor = {"blue"}
              />
            </Cell>
          </Grid>
          
          
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }
  render() {
    return(
      <div style={{textAlign:"center"}}>
        <h1>My Projects</h1>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>All</Tab>
          {/* <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab> */}
        </Tabs>
          <Grid>
            <Cell col={12} >  
              <div className="content">{this.toggleCategories()}</div>            
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Projects;