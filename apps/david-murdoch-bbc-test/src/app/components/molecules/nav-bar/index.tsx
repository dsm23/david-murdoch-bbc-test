import React, { FunctionComponent } from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import Brand from '@bbc/psammead-brand';
import { news } from '@bbc/psammead-assets/svgs';
import Navigation, {
  NavigationUl,
  NavigationLi,
} from '@bbc/psammead-navigation';
import { latin } from '@bbc/gel-foundations/scripts';

const NavBar: FunctionComponent<RouteComponentProps> = ({ location }) => (
  <>
    <Brand
      product="BBC News"
      serviceLocalisedName="Pidgin"
      svgHeight={24}
      maxWidth={280}
      minWidth={180}
      svg={news}
      url="https://www.bbc.co.uk/news"
      borderBottom
    />
    <Navigation script={latin} skipLinkText="Skip to content" service="news">
      <NavigationUl>
        {[
          {
            href: '/',
            label: 'Home',
          },
          {
            href: '/new',
            label: 'New Article',
          },
        ].map(({ href, label }) => (
          <Link to={href} key={label}>
            <NavigationLi
              script={latin}
              active={location.pathname === href}
              currentPageText="Current Page"
              service="news"
            >
              {label}
            </NavigationLi>
          </Link>
        ))}
      </NavigationUl>
    </Navigation>
  </>
);

export default withRouter(NavBar);
