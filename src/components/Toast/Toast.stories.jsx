import React from 'react';
import { Toast } from '../..';
import { HiFire } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { IoIosPaperPlane } from 'react-icons/io';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {},
};
export default meta;

const Template = args => <Toast {...args} />;

export const Text = Template.bind({});
Text.args = {
  isText: true,
  isIcon: false,
  isSimple: false,
  toastMessage: 'Set yourself free.',
  closeIcon: <IoMdClose />,
};

export const Icon = Template.bind({});
Icon.args = {
  isIcon: true,
  isText: false,
  isSimple: false,
  icon: <HiFire />,
  closeIcon: <IoMdClose />,
  toastMessage: 'Set yourself free.',
};

export const Simple = Template.bind({});
Simple.args = {
  isIcon: false,
  isText: false,
  isSimple: true,
  toastMessage: 'Message sent successfully.',
  icon: <IoIosPaperPlane />,
};
