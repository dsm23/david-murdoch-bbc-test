import React, { FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Brand from '@bbc/psammead-brand';
import { news } from '@bbc/psammead-assets/svgs';
import Navigation, {
  NavigationUl,
  NavigationLi,
} from '@bbc/psammead-navigation';
import { latin } from '@bbc/gel-foundations/scripts';
import { C_POSTBOX, C_WHITE } from '@bbc/psammead-styles/colours';

const NavBar: FunctionComponent<{}> = () => {
  const location = useLocation();
  
  return (
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
      backgroundColour={C_POSTBOX}
      logoColour={C_WHITE}
    />
    <Navigation script={latin} skipLinkText="Skip to content" service="news">
      <NavigationUl>
        {[
          {
            href: '/',
            label: 'Home',
          },
          {
            href: '/board',
            label: 'Rankings Board',
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
};

export default NavBar;
