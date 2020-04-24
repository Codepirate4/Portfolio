import React, {Component} from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class MayankCard extends Component{




    render(){
        return(
            <Card shadow={5} style={{ margin: 'auto'}}>
            <CardTitle style={{ height: '176px'}} >{this.props.projectTitle}</CardTitle>
            <CardText>
                <p> {this.props.projectDesciption}</p>
            </CardText>

            <CardActions border>
              <Button colored disabled ={this.props.githubDisabled} onClick={()=>alert("hello")}>GitHub</Button>
              <Button colored disabled ={this.props.liveDemoDisabled}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        )
    }
}

export default MayankCard
