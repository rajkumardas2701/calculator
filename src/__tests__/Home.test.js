import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Home from '../layouts/Home';

afterEach(cleanup);

it('should display the heading', () => {
  const { getByTestId } = render(<Home />);
  expect(getByTestId('home-test')).toHaveTextContent('Welcome to our page!');
});

it('should display the first text paragraph', () => {
  const { getByTestId } = render(<Home />);
  expect(getByTestId('home-para-test')).toHaveTextContent(/Lorem ipsum/i);
});

it('renders correctly', () => {
  const home = renderer.create(<Home />).toJSON();
  expect(home).toMatchSnapshot();
});
