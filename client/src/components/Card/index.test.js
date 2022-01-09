import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { cardProps } from './helpers';

import Card from '.';

describe('Prueba Home', () => {
  test('should render all card information as name, species, origin, location and status', () => {
    render(<Card {...cardProps} />);
    expect(screen.getByText(/Gonorrhea/)).toBeInTheDocument();
    expect(screen.getByText(/Last known location/)).toBeInTheDocument();
    expect(screen.queryAllByText(/Earth/)).toHaveLength(2);
    expect(screen.getByText(/First seen in/)).toBeInTheDocument();
    expect(screen.getByText(/Alive - Human/)).toBeInTheDocument();
  });
});
