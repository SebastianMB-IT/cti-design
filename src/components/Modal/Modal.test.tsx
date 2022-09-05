import React from 'react'
import * as ReactDOM from 'react-dom'
import { Base as Modal } from './Modal.stories'
import { createRoot } from 'react-dom/client'

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const root = createRoot(div)
    root.render(<Modal />)
    ReactDOM.unmountComponentAtNode(div)
  })
})
