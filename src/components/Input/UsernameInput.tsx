/**
 * It can be used to render a Input for the Username.
 *
 */

import React from 'react';

export const UsernameInput = () => {
  return (
    <input
      id="email"
      name="email"
      type="email"
      placeholder="Inserisci il tuo nome utente"
      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
    />
  );
};
