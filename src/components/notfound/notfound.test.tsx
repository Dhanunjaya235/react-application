import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Notfound from './notfound';

describe('<Notfound />', () => {
  test('it should mount', () => {
    render(<Notfound />);
    
    const notfound = screen.getByTestId('Notfound');

    expect(notfound).toBeInTheDocument();
  });
});