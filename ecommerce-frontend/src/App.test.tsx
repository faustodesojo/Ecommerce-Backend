import React from 'react';
import { render, screen } from '@testing-library/react';
import AppEcommerce from './App';

test('renders learn react link', () => {
  render(<AppEcommerce />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
