import React from 'react';
import { Accordion } from '../..';
import { HiInformationCircle } from 'react-icons/hi';
import { AiFillEye } from 'react-icons/ai';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = args => <Accordion {...args} />;

export const Flush = Template.bind({});
Flush.args = {
  accordion1Type: 'A simple info Accordion',
  accordion2Type: 'A simple info Accordion',
  accordion3Type: 'A simple info Accordion',
  accordion1Title: 'A simple info Accordion',
  accordion2Title: 'A simple info Accordion',
  accordion3Title: 'A simple info Accordion',
  icon: <HiInformationCircle />,
  isFlush: true,
  isBorder: false,
  isSimple: false,
};

export const Border = Template.bind({});
Border.args = {
  accordion1Type: 'A simple info Accordion',
  accordion2Type: 'A simple info Accordion',
  accordion3Type: 'A simple info Accordion',
  accordion1Title: 'A simple info Accordion',
  accordion2Title: 'A simple info Accordion',
  accordion3Title: 'A simple info Accordion',
  icon: <HiInformationCircle />,
  isAction: false,
  isBorder: true,
  isSimple: false,
};

export const Simple = Template.bind({});
Simple.args = {
  accordion1Type: 'A simple info Accordion',
  accordion2Type: 'A simple info Accordion',
  accordion3Type: 'A simple info Accordion',
  accordion1Title: 'A simple info Accordion',
  accordion2Title: 'A simple info Accordion',
  accordion3Title: 'A simple info Accordion',
  icon: <HiInformationCircle />,
  isAction: false,
  isBorder: false,
  isSimple: true,
};
