import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../layouts/Navbar';

afterEach(cleanup);

it('should display the heading', () => {
  const { getByTestId } = render(<Navbar />);
  expect(getByTestId('navBar-header')).toHaveTextContent('Math Magicians');
});

it('should display link for home page', () => {
  render(<Navbar />);
  const homeAnchorNode = screen.getByText('Home');
  expect(homeAnchorNode).toBeInTheDocument();
});

it('should display link for calculator page', () => {
  render(<Navbar />);
  const homeAnchorNode = screen.getByText('Calculator');
  expect(homeAnchorNode).toBeInTheDocument();
});

it('should display link for quote page', () => {
  render(<Navbar />);
  const homeAnchorNode = screen.getByText('Quotes');
  expect(homeAnchorNode).toBeInTheDocument();
});
