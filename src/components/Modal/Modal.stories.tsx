import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Modal, ModalProps } from '../..'
import { Button } from '../..'
import { useState } from 'react'

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
              <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v3.75m-9.303 3.376C1.83 19.126 2.914 21 4.645 21h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 4.88c-.866-1.501-3.032-1.501-3.898 0L2.697 17.626zM12 17.25h.007v.008H12v-.008z" />
              </svg>
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