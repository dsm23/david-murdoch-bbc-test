import React from 'react';
import { render, cleanup } from '@testing-library/react';

import SharedComponents from './shared-components';

describe(' SharedComponents', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<SharedComponents />);
    expect(baseElement).toBeTruthy();
  });
});
