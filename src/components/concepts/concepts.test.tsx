import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Concepts from './concepts';

describe('<Concepts />', () => {
  test('it should mount', () => {
    render(<Concepts />);
    
    const concepts = screen.getByTestId('Concepts');

    expect(concepts).toBeInTheDocument();
  });
});