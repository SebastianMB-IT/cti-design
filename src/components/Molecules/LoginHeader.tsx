/**
 * It can be used to render a Input for the Username.
 *
 */

import React from 'react';

export const LoginHeader = () => {
  return (
    <>
      <a href="./index.html" className="text-blue-600 text-medium">
        nethcti.logo
      </a>
      <h2 className="mt-6 text-4xl font-extrabold text-neutral-600">Login.</h2>
      <div className="mt-4 text-base text-gray-500">
        <p>Esegui il login con il tuo account.</p>
      </div>
    </>
  );
};
