import React from 'react'
import { Warning, WithForm } from './Modal.stories'
import { render } from '@testing-library/react';

test('should show warning modal', () => {
  render(<Warning show={true} />)
})

test('should show modal with form', () => {
  render(<WithForm show={true} />)
})