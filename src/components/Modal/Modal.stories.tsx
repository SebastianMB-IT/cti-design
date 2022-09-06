import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal, ModalProps } from '../..';
import { Button, TextInput } from '../..';
import { useState } from 'react';
import { HiOutlineExclamation } from 'react-icons/hi';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta as Meta;

export const Warning: Story<ModalProps> = ({
  children,
  ...props
}): JSX.Element => {
  const [showMondal, setShowMondal] = useState(false);
  return (
    <>
      <Button onClick={() => setShowMondal(true)}>Show modal</Button>
      <Modal show={showMondal} {...props}>
        <Modal.Content>
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-12 sm:w-12">
              <HiOutlineExclamation className="h-6 w-6 text-red-600" />
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:ml-5 sm:text-left">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Delete account
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                The contact will be deleted definitevely from the phonebook.
              </p>
            </div>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button
            style="red"
            fullWidth="sm"
            onClick={() => setShowMondal(false)}
          >
            Delete
          </Button>
          <Button
            style="white"
            fullWidth="sm"
            onClick={() => setShowMondal(false)}
          >
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export const WithForm: Story<ModalProps> = ({
  children,
  ...props
}): JSX.Element => {
  const [showMondal, setShowMondal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('submit', e.target);
    setShowMondal(false);
  };
  return (
    <>
      <Button onClick={() => setShowMondal(true)}>Show modal</Button>
      <Modal show={showMondal} {...props}>
        <form onSubmit={handleSubmit}>
          <Modal.Content>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Add contact
            </h3>
            <p className="mt-2 text-sm text-gray-500 ">
              The contact will be added to the phonebook and will be pubblicly
              available by default.
            </p>
            <div className="flex flex-col gap-2 mt-4">
              <TextInput
                label="Name"
                placeholder="Enter the name"
                name="name"
              />
              <TextInput
                label="Surname"
                placeholder="Enter the surname"
                name="surname"
              />
              <TextInput
                label="Number"
                placeholder="Enter the number"
                name="number"
              />
            </div>
          </Modal.Content>
          <Modal.Actions>
            <Button type="submit" fullWidth="sm">
              Save
            </Button>
            <Button
              style="white"
              fullWidth="sm"
              onClick={() => setShowMondal(false)}
            >
              Cancel
            </Button>
          </Modal.Actions>
        </form>
      </Modal>
    </>
  );
};
