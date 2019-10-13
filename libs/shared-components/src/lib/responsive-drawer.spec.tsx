import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { ResponsiveDrawer } from './responsive-drawer';

describe(' ResponsiveDrawer', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<ResponsiveDrawer />);
    expect(baseElement).toBeTruthy();
  });
});
