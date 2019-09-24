import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Users from './Components/users/Users';
import axios from 'axios';
import Search from './Components/users/Search';
import About from './Components/pages/About';
import User from './Components/users/User';


export default class App extends Component {

  state = {
    repos: [],
    users: [],
    user: {},
    loading: false,
    Alerterror: false,
  }


  getUserRepos = async username => {
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ repos: res.data, loading: false });
  }


  getUser = async username => {
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ user: res.data, loading: false });
  }

  clear = () => {
    this.setState({ users: [] })
  }

  searchUser = async text => {
    try {
      const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

      this.setState({ users: res.data.items, loading: false });
    } catch (error) {
      this.setState({
        Alerterror: true
      })
      setTimeout(() => this.setState({ Alerterror: false }), 5000)
    }

  }

  render() {
    return (
      <Router>
        <div className="App">



          <Navbar title="Github User Finder" clearUser={this.clear} showClear={this.state.users.length > 0 ? true : false} />

          <Switch>

            <Route exact path='/GithubUserFinder' render={props => (
              <Fragment>
                <Search searchUsers={this.searchUser} AlertError={this.state.Alerterror} />
                <Users userres={this.state.users} />
              </Fragment>
            )} />


            <Route exact path='/GithubUserFinder/about' component={About} />

            <Route exact path='/GithubUserFinder/user/:login' render={props => (
              <User {...props} getUserRepos={this.getUserRepos} repos={this.state.repos} getUser={this.getUser} user={this.state.user} />
            )} />

          </Switch>



        </div>
      </Router>


    );
  }

}
