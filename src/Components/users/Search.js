import React, { Component } from 'react'
import { Alert, Pane, SearchInput, Button } from 'evergreen-ui'

export default class Search extends Component {
    state = {
        text: ""
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.searchUsers(this.state.text);
        this.setState({ text: '' })

    }

    render() {
        return (
            <div>
                {this.props.AlertError && (<Alert
                    intent="danger"
                    title="Please Enter Something...."
                />)}
                <form onSubmit={this.onSubmit}>
                    <Pane
                        marginTop={16}
                        marginBottom={16}>
                        <SearchInput
                            name="text"
                            value={this.state.text}
                            onChange={this.onChange}
                            placeholder="Search" width="100%" />
                    </Pane>
                    <Button marginRight={16} appearance="primary">
                        Search
                    </Button>

                </form>

            </div>
        )
    }
}
