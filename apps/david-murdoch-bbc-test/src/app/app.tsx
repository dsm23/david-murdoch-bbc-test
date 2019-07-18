import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Brand from '@bbc/psammead-brand';
import { news } from '@bbc/psammead-assets/svgs';
import Navigation, {
  NavigationUl,
  NavigationLi,
} from '@bbc/psammead-navigation';
import { latin } from '@bbc/gel-foundations/scripts';
import { CssBaseline, Container } from '@material-ui/core';

import './app.scss';

import getArticle from './queries/getArticle';

import NavBar from './components/molecules/nav-bar';

import Home from './components/organisms/home';
import Post from './components/organisms/post';

export const App = () => (
  <Router>
    <CssBaseline />
    <NavBar />
    <Container maxWidth="sm">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new">
          {() => <div>placeholder</div>}
        </Route>
        <Route path="/:urlIndex" component={Post} />
      </Switch>
    </Container>
  </Router>
);

export default App;
