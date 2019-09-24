import React, { Component } from 'react';
import { Pane } from 'evergreen-ui'
import UserItem from './UserItem';

export default class Users extends Component {

    render() {
        const user = this.props.userres;
        return (
            <Pane clearfix>
                {user.map(user => (
                    <UserItem key={user.id} name={user.login} repourl={user.html_url}
                        avatar={user.avatar_url}
                    />
                ))}

            </Pane>
        )
    }
}
