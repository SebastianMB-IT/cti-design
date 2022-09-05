import React from 'react'
import * as ReactDOM from 'react-dom'
import { Primary as Button } from './Button.stories'
import { createRoot } from 'react-dom/client'

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const root = createRoot(div)
    root.render(<Button />)
    ReactDOM.unmountComponentAtNode(div)
  })
})
