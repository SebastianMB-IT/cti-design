import React from 'react';
import { Button } from '../..';
import { HiPlay, HiStop, HiRewind } from 'react-icons/hi';

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: {
      table: {
        category: 'Events',
        subcategory: 'Button Events',
      },
      action: 'clicked',
    },
    squared: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
    },
    variant: {
      options: ['primary', 'secondary', 'light', 'danger'],
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  size: 'base',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  variant: 'secondary',
};

export const FullRounded = Template.bind({});
FullRounded.args = {
  ...Primary.args,
  variant: 'primary',
  rounded: 'full',
};

export const Light = Template.bind({});
Light.args = {
  ...Primary.args,
  variant: 'light',
};

export const Danger = Template.bind({});
Danger.args = {
  ...Primary.args,
  variant: 'danger',
};

const TemplateWithChild = (args) => (
  <Button {...args}>
    <HiRefresh className="h-4 w-4" />
    Button
  </Button>
);

export const WithIcon = TemplateWithChild.bind({});
WithIcon.args = {
  size: 'base',
  variant: 'primary',
};

const TemplateWithChildRight = (args) => (
  <Button {...args}>
    Button
    <HiRefresh className="h-4 w-4" />
  </Button>
);

export const WithIconRight = TemplateWithChildRight.bind({});
WithIconRight.args = {
  size: 'base',
  variant: 'primary',
};

const TemplateButtonIcon = (args) => (
  <Button {...args}>
    <HiRefresh className="h-4 w-4" />
  </Button>
);

export const ButtonIcon = TemplateButtonIcon.bind({});
ButtonIcon.args = {
  size: 'base',
  variant: 'light',
};

export const ButtonIconSquared = TemplateButtonIcon.bind({});
ButtonIconSquared.args = {
  size: 'base',
  variant: 'primary',
  squared: 'right',
};

export const ButtonGroup = () => (
  <div className='flex -space-x-1'>
    <Button size="base" variant="light" squared='right'>
      <HiRewind className="h-4 w-4" />
    </Button>
    <Button size="base" variant="light" rounded='none'>
      <HiPlay className="h-4 w-4" />
    </Button>
    <Button size="base" variant="light" squared='left'>
      <HiStop className="h-4 w-4" />
    </Button>
  </div>
);
