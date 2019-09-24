import React, { Component } from 'react'
import { Pane, Strong, Avatar, Button } from 'evergreen-ui'
import { Link } from 'react-router-dom'

export default class UserItem extends Component {

    render() {
        return (

            <Pane
                elevation={4}
                float="left"
                width={200}
                height={180}
                margin={24}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
            >
                <Avatar
                    src={this.props.avatar}
                    name={this.props.name}
                    size={90}
                />

                <Strong size={500} marginTop={10}  >{this.props.name}</Strong>
                <Link to={`/user/${this.props.name}`}><Button marginTop={20} height={20} appearance="primary" iconAfter="arrow-right">Profile</Button> </Link>

            </Pane>

        )
    }
}
