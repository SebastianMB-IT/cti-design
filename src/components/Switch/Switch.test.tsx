import React from 'react';
import * as ReactDOM from 'react-dom';
import { Off as Switch } from './Switch.stories';

describe('Switch', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Switch />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
