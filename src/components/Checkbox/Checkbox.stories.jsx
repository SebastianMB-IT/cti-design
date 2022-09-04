import React from 'react'
import { Checkbox } from '../..'
const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: {
    controls: { expanded: true },
  },
}
export default meta
const Template = (args) => <Checkbox {...args} />
export const Standard = Template.bind({})
Standard.args = {
  first: 'Name',
  second: 'State',
  third: 'Extension',
}
