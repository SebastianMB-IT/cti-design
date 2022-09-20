import React from 'react'
import { Base as Card } from './Card.stories'
import { render } from '@testing-library/react';

test('should show login form', () => {
  render(<Card />)
})