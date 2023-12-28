import './Auth.css';
import AuthForm from '../../components/AuthForm/AuthForm.js';
import { useState } from 'react';
import Header from '../../components/Header/Header.js';

import React from 'react';
import { signUpUser, signInUser } from '../../services/users';

import { logout } from '../../services/users';

export default function Auth({ user, setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [type, setType] = useState('signin');

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response =
        type === 'signin' ? await signInUser(email, password) : signUpUser(email, password);
      setUser(response);
      setEmail('');
      setPassword('');
    } catch {
      setMessage('Sorry. Something did not work.');
      setEmail('');
      setPassword('');
    }
  };

  const logOut = async () => {
    try {
      await logout();
      setUser(null);
    } catch {
      setMessage('something went wrong');
    }
  };

  return (
    <div className="auth">
      <Header type={type} setType={setType} user={user} logOut={logOut} />
      {!user ? (
        <AuthForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          message={message}
          submitHandler={submitHandler}
          type={type}
        />
      ) : (
        <>
          <p>{message}</p>
          <img src="https://media.makeameme.org/created/its-time-registration.jpg" />
        </>
      )}
    </div>
  );
}