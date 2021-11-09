import React from 'react';

const LogOut = props => {

  const removeSession = () => {
    // window.localStorage.removeItem('sessionToken');
    props.updateSession();
  };

  return (
    <button onClick={removeSession}>Sign Out</button>
  );
};

export default LogOut;