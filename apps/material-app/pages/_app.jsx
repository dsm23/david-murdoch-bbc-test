import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import withApollo from '../lib/withApollo';

import { ResponsiveDrawer as Drawer } from '@david-murdoch-bbc-test/shared-components';

import { theme } from '@david-murdoch-bbc-test/theme';

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Drawer>
            <Component {...pageProps} />
          </Drawer>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default withApollo(MyApp);
