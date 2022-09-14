import React from 'react'
import { Circular as Badge } from './Avatar.stories'
import { render } from '@testing-library/react';

test('should show login form', () => {
  render(<Badge src='https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' />)
})