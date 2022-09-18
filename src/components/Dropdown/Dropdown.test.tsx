import React from 'react';
import { render } from '@testing-library/react';
import { Dropdown, Button } from '../..';
import { HiChevronDown } from 'react-icons/hi'

test('should render without crash', () => {
  render(
    <Dropdown
      items={
        <>
          <Dropdown.Item>Call</Dropdown.Item>
          <Dropdown.Item>Chat</Dropdown.Item>
        </>
      }
    >
      <Button variant="light">
        Actions
        <HiChevronDown className="h-5 w-5" aria-hidden="true" />
      </Button>
    </Dropdown>
  );
});
