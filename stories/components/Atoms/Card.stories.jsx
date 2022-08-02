import React from 'react';
import { Card } from './../../../src/';

const meta = {
  title: 'Components/Atoms/Card',
  component: Card,
  argTypes: {
    onClick: { action: 'clicked' },
    backgroundColor: { control: 'color' },
    enabled: {
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = (args) => <Card {...args} />;

export const Content = Template.bind({});
Content.args = {
  content: "Write the content of the cards here",
};
