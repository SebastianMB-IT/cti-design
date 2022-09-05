import React from 'react'
import { Primary as Button } from './Button.stories'
import { render } from '@testing-library/react';

test('should show login form', () => {
  render(<Button />)
})