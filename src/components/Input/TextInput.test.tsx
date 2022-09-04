import React from 'react'
import * as ReactDOM from 'react-dom'
import { Base as TextInput } from './TextInput.stories'

describe('Input', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TextInput />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
