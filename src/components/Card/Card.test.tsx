import React from 'react'
import { Base as Card } from './Card.stories'
import { render } from '@testing-library/react';

test('should render without crash', () => {
  render(<Card />)
})