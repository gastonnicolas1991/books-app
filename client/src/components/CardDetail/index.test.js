import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { cardDetailProps } from './helpers';

import CardDetail from '.';

describe('CardDetail component', () => {
  test('should render the title, author, price and descriptors in CardDetail', () => {
    render(<CardDetail {...cardDetailProps} />);
    expect(screen.getByText(/Harry Potter and the Deathly Hallows/)).toBeInTheDocument();
    expect(screen.getByText(/Author:/)).toBeInTheDocument();
    expect(screen.getByText(/Price:/)).toBeInTheDocument();
    expect(screen.getByText(/J.K Rowling/)).toBeInTheDocument();
    expect(screen.getByText(/5.99/)).toBeInTheDocument();
  });
});
