import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Strong, Heading, Badge, Icon, Pane, Text, Avatar, Button } from 'evergreen-ui'
export default class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
        this.props.getUserRepos(this.props.match.params.login)
    }
    render() {
        let id = 1;
        const {
            hireable,
            login,
            avatar_url,
            html_url,
            name,
            company,
            location,
            email,
            bio,
            public_repos,
            public_gists,
            followers,
            following,


        } = this.props.user;
        return (
            <Pane
                display="flex"
                flexDirection="column"
            >
                <Pane

                    float="left"
                    marginLeft={24}
                    display="flex"

                    alignItems="center"

                >

                    <Link to='/'><Button marginTop={16} height={25} appearance="primary" >Back to Search</Button> </Link>
                    <Text marginLeft={24}>Hireable : {'  '} {hireable ? <Icon icon="tick-circle" color="success" marginRight={16} /> :
                        <Icon icon="cross" color="danger" marginRight={16} />}</Text>



                </Pane>

                <Pane
                    elevation={4}
                    marginTop={25}
                    float="left"
                    marginLeft={50}
                    marginRight={50}
                    display="flex"
                    justifyContent="space-evenly"
                    flexDirection="row"
                >
                    <Pane display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        padding={50}

                    >
                        <Avatar
                            src={avatar_url}
                            name={name}
                            size={100}
                        />
                        <Heading size={600} marginTop="default">{name}</Heading>
                        <Strong size={300}>Location : {location}</Strong>

                    </Pane>

                    <Pane padding={70}>
                        <Badge color="blue" isSolid marginRight={8}>BIO : </Badge>
                        <br />{bio ? bio : "Null"}

                        <Pane
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            flexDirection="row">
                            <Pane>
                                <p /><Button iconAfter="arrow-right">
                                    <a style={{ textDecoration: 'none' }} href={html_url}>Visit Github Profile</a>
                                </Button>
                                <p /> Username : {login}
                                <br />Company : {company ? company : 'Null'}
                                <br />Email : {email ? email : 'Null'}
                            </Pane>

                            <Pane


                                display="flex"
                                justifyContent="space-evenly"
                                alignItems="center"
                                flexDirection="column"
                                height={110}
                                marginLeft={50}>

                                <Badge color="neutral" isSolid >Public Repos: {public_repos}</Badge>
                                <Badge color="green" isSolid >Followers : {followers}</Badge>
                                <Badge color="blue" isSolid >Following : {following}</Badge>
                                <Badge color="red" isSolid >Puplic Gists : {public_gists}</Badge>

                            </Pane>

                        </Pane>



                    </Pane>

                </Pane>

                <Pane
                    elevation={4}
                    marginTop={25}
                    float="left"
                    marginLeft={50}
                    marginRight={50}
                    display="flex"
                    height={200}
                    justifyContent="space-evenly"

                    flexDirection="column">
                    <Badge color="red" marginRight={8}>Repositories</Badge>
                    {this.props.repos.map((r) => (
                        <Pane>
                            <a style={{ textDecoration: 'none' }} href={r.html_url} >
                                <Badge marginLeft={30} color="teal" marginRight={8}>{id++}. {r.name}</Badge></a>
                        </Pane>
                    ))}


                </Pane>




            </Pane >

        )
    }
}
