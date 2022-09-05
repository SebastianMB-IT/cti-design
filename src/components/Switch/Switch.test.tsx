import React from 'react'
import { Off as Switch } from './Switch.stories'
import { render } from '@testing-library/react';

test('should show login form', () => {
  render(<Switch />)
})