import React from 'react'
import { Base as Modal } from './Modal.stories'
import { render } from '@testing-library/react';

test('should show login form', () => {
  render(<Modal />)
})