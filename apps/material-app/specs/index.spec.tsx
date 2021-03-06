import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Index from '../pages/index';

describe('Index', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<Index />);
    expect(getByText('Welcome to material-app!')).toBeTruthy();
  });
});
