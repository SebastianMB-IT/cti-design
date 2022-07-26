import React from 'react'
import { Image } from '../..'

const meta = {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    enabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

const Template = (args) => <Image {...args} />
export const Default = Template.bind({})
Default.args = {
  enabled: false,
}
