import React, { Component } from 'react'
import { Pane, Tab, Button, Text, Heading } from 'evergreen-ui'
import { Link } from 'react-router-dom';



export default class Navbar extends Component {
    render() {
        return (
            <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
                <Pane flex={1} alignItems="center" display="flex">
                    <Heading size={600}>{this.props.title}</Heading>
                </Pane>
                <Pane>
                    {this.props.showClear && (<Tab appearance="primary" onSelect={this.props.clearUser} >Clear</Tab>)}

                    <Link to='/GithubUserFinder' style={{ textDecoration: 'none' }}><Tab>Home </Tab></Link>
                    <Link to='/GithubUserFinder/about' style={{ textDecoration: 'none' }}><Tab>About </Tab></Link>

                </Pane>
            </Pane >


        );
    }
}

// 

