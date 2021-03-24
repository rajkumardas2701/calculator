import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quote from '../layouts/Quote';

afterEach(cleanup);

it('should display the quote text', () => {
  const { getByTestId } = render(<Quote />);
  expect(getByTestId('quote-test')).toHaveTextContent(/Mathematics is not about numbers/);
});
