import React from 'react'
import { Available as Badge } from './Badge.stories'
import { render } from '@testing-library/react';

test('should show login form', () => {
  render(<Badge variant="available" />)
})