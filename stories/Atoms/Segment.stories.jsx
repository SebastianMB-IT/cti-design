import React from 'react';
import { Segment } from './../../src';

const meta = {
  title: 'Components/Atoms/Segment',
  component: Segment,
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

const Template = (args) => <Segment {...args} />;

export const Content = Template.bind({});
Content.args = {
  segmentContent: "Write something here!",
};