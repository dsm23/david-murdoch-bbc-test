import React from 'react';
import { render, cleanup } from '@testing-library/react';

import MaterialSnackerbarContentWrapper from './material-snackerbar-content-wrapper';

describe(' MaterialSnackerbarContentWrapper', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<MaterialSnackerbarContentWrapper />);
    expect(baseElement).toBeTruthy();
  });
});
