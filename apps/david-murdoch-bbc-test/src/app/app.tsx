import React, { useState } from 'react';
import Pagination from 'rc-pagination';
import localeInfo from 'rc-pagination/lib/locale/en_GB';
import 'rc-pagination/assets/index.css';
import Brand from '@bbc/psammead-brand';
import { igbo } from '@bbc/psammead-assets/svgs';
import { CssBaseline, Container } from '@material-ui/core';

import './app.scss';

export const App = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const onChange = newPageIndex => setPageIndex(newPageIndex);
  return (
    <div>
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
        <Pagination
          onChange={onChange}
          current={pageIndex}
          total={5}
          pageSize={1}
          locale={localeInfo}
        />
      </Container>
      <header style={{ textAlign: 'center' }}>
        <h1>Welcome to david-murdoch-bbc-test!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png"
        />
      </header>
      <p>
        This is a React app built with <a href="https://nx.dev">Nx</a>.
      </p>
      <p>🔎 **Nx is a set of Angular CLI power-ups for modern development.**</p>
      <h2>Quick Start & Documentation</h2>
      <ul>
        <li>
          <a href="https://nx.dev/getting-started/what-is-nx">
            30-minute video showing all Nx features
          </a>
        </li>
        <li>
          <a href="https://nx.dev/tutorial/01-create-application">
            Interactive tutorial
          </a>
        </li>
      </ul>
    </div>
  );
};

export default App;
