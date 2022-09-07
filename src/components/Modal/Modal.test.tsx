import React from 'react'
import { Danger, WithForm } from './Modal.stories'
import { render } from '@testing-library/react';

test('should show warning modal', () => {
  render(<Danger show={true} onClose={() => console.log('danger modal rendered')} />)
})

test('should show modal with form', () => {
  render(<WithForm show={true} onClose={() => console.log('modal with form rendered')} />)
})