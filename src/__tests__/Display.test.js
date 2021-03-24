import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from '../components/Display';

afterEach(cleanup);

it('displays the current result', () => {
  const { renderer } = render(<Display total="10" />);
  expect(screen.getByTestId('test-display')).toHaveTextContent('10');
  expect(renderer).toMatchSnapshot();
});
