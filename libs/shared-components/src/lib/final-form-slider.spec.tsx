import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { FinalFormSlider } from './final-form-slider';

describe(' FinalFormSlider', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<FinalFormSlider />);
    expect(baseElement).toBeTruthy();
  });
});
