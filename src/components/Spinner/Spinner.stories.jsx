import React from 'react'
import { Spinner } from '../..'
import { ImSpinner2 } from 'react-icons/im'

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    enabled: {},
    color: {
      control: {
        type: 'color',
        presetColors: [
          'red',
          'green',
          'yellow',
          'blue',
          'white',
          'orange',
          'pink',
          'purple',
          'gray',
        ],
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

const Template = (args) => <Spinner {...args} />

export const Loading = Template.bind({})
Loading.args = {
  icon: <ImSpinner2 />,
}
