/**
 * It can be used to render a Input for the Username.
 *
 * @param {string} placeholder The placeholder to render.
 * @param {string} userLabel The label for the username.
 * @param {string} placeholder The placeholder to render.
 */

import React from 'react';

type UsernameInputProps = {
  withLabel?: boolean;
  userLabel?: string;
  placeholder?: string;
};

export const UsernameInput = ({
  placeholder,
  userLabel,
  withLabel,
}: UsernameInputProps): JSX.Element => {
  return (
    <>
      {withLabel && userLabel && (
        <label className="block text-sm font-medium text-neutral-600">
          {userLabel}
        </label>
      )}
      <div className="mt-1">
        <input
          id="username"
          name="username"
          type="text"
          placeholder={placeholder}
          className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
        />
      </div>
    </>
  );
};
