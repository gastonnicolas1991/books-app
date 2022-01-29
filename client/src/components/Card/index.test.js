import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { cardProps } from './helpers';

import Card from '.';

describe('Card component', () => {
  test('should render the title Card', () => {
    render(<Card {...cardProps} />);
    expect(screen.getByText(/Harry Potter and the Deathly Hallows/)).toBeInTheDocument();
  });
});
