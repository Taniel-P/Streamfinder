import React from 'react';

const LogOut = () => {

  const removeSession = () => {
    window.localStorage.removeItem('sessionToken');
  };

  return (
    <button onClick={removeSession}>Sign Out</button>
  );
};

export default LogOut;