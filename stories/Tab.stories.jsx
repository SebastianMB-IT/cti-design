import React from 'react';
import { Tab } from '../src';

const meta = {
  title: 'Tab',
  component: Tab,
  argTypes: {
    onClick: { action: 'clicked' },
    backgroundColor: { control: 'color' },
    enabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = args => <Tab {...args} />;

export const Section = Template.bind({});
Section.args = {
  enabled: false,
  section1: 'Commercials',
  section2: 'Developers',
  section3: 'Assistance',
};
