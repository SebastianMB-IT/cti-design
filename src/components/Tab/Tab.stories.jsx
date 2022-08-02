import React from 'react';
import { Tab } from '../..';

const meta = {
  title: 'Components/Tab',
  component: Tab,
  argTypes: {
    onClick: { action: 'clicked' },
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
  content1: 'Lorem ipsum dolor sit amet',
  content2: 'Lorem ipsum dolor sit amet',
  content3: 'Lorem ipsum dolor sit amet',
};
