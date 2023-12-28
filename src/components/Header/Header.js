import React from 'react';
import './Header.css';
import classNames from 'classnames';

export default function Header({ type, setType, user, logOut }) {
  return (
    <header>
      {!user ? (
        <>
          <h2
            className={classNames({ active: type === 'signin' })}
            onClick={() => {
              setType('signin');
            }}
          >
            Sign In
          </h2>
          <h2
            className={classNames({ active: type === 'signup' })}
            onClick={() => {
              setType('signup');
            }}
          >
            Sign Up
          </h2>
        </>
      ) : (
        <h2 className="logout" onClick={logOut}>
          Log Out
        </h2>
      )}
    </header>
  );
}