import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Modal, ModalProps } from '../..'
import { Button } from '../..'
import { useState } from 'react'
import { HiOutlineExclamation } from 'react-icons/hi'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    onIconClick: {
      action: 'icon clicked',
    },
    squared: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta as Meta


export const Base: Story<ModalProps> = ({ children, ...rest }): JSX.Element => {

  const [showMondal, setShowMondal] = useState(false)

  return (
    <>
      <Button onClick={() => setShowMondal(true)}>Show modal</Button>
      <Modal show={showMondal} {...rest}>
        <Modal.Content>
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <HiOutlineExclamation />
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">Deactivate account</h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
              </div>
            </div>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button style='red' onClick={() => setShowMondal(false)}>
            Delete
          </Button>
          <Button style='white' onClick={() => setShowMondal(false)}>
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};