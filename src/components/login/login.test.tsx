import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './login';

describe('<Login />', () => {
  test('it should mount', () => {
    render(<Login log={function (): {} {
      throw new Error('Function not implemented.');
    } } />);
    
    const login = screen.getByTestId('Login');

    expect(login).toBeInTheDocument();
  });
});