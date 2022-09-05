import React from 'react'
import { Base as TextInput } from './TextInput.stories'
import { render } from '@testing-library/react';

test('should show login form', () => {
  render(<TextInput />)
})