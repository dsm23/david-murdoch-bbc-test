import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CssBaseline, Container } from '@material-ui/core';

import './app.scss';

import { client } from './apollo';

import NavBar from './components/molecules/nav-bar';

import Home from './components/templates/home';
import Post from './components/templates/post';
import RankingsBoard from './components/templates/rankings-board';

export const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="sm">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/board">
            <RankingsBoard />
          </Route>
          <Route path="/:urlIndex">
            <Post />
          </Route>
        </Switch>
      </Container>
    </Router>
  </ApolloProvider>
);

export default App;
