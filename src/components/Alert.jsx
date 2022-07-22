import React from 'react';

export const Alert = props => {
  // const errorType = props.errorType;
  const errorType = 'notEnabled';
  if (errorType === 'alertFailed') {
    return (
      <div className="flex flex-wrap justify-center">
        <div
          className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg
                     dark:bg-red-200 dark:text-red-800 w-40 border-4 border-red-200"
          role="alert"
        >
          <span className="font-medium">Login fallito</span> Credenziali
          invalide.
        </div>
      </div>
    );
  } else if (errorType === 'notEnabled') {
    return (
      <div className="flex flex-wrap justify-center">
        <div
          className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
          role="alert"
        >
          <span className="font-medium">
            Utente non abilitato all'uso del Cti
          </span>{' '}
          Si prega di contattare l'amministratore.
        </div>
      </div>
    );
  }
};
