import React from 'react';
import * as ReactDOM from 'react-dom';
import { Input as Button } from './Input.stories';

describe('Input', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
