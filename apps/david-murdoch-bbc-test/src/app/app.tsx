import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Brand from '@bbc/psammead-brand';
import { igbo } from '@bbc/psammead-assets/svgs';
import { CssBaseline, Container } from '@material-ui/core';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import './app.scss';

import getArticle from './queries/getArticle';

import Home from './components/organisms/home';
import Post from './components/organisms/post';

export const App = () => (
  <Router>
    <CssBaseline />
    <header role="banner">
      <Brand
        product="BBC News"
        svgHeight={24}
        maxWidth={280}
        minWidth={180}
        svg={igbo}
        url="https://www.bbc.co.uk/news"
        borderBottom
      />
    </header>
    <Container maxWidth="sm">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:urlIndex" component={Post} />
      </Switch>
    </Container>
  </Router>
);

export default App;
