import React from 'react'
import { Table } from '../..'

const meta = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    color: {
      control: {
        type: 'color',
        presetColors: ['red', 'green', 'yellow', 'blue'],
      },
    },
    backgroundColor: {
      control: {
        type: 'color',
        presetColors: ['red', 'green', 'yellow', 'blue'],
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

const Template = (args) => <Table {...args} />

export const Standard = Template.bind({})
Standard.args = {
  header1: 'Header 1',
  header2: 'Header 2',
  header3: 'Header 3',
  rows: [
    {
      column1: 'Column 1',
      column2: 'Column 2',
      column3: 'Column 3',
    },
    {
      column1: 'Column 1',
      column2: 'Column 2',
      column3: 'Column 3',
    },
  ],
}
