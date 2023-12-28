import './AuthForm.css';

import React from 'react';

export default function AuthForm({
  email,
  setEmail,
  password,
  setPassword,
  message,
  submitHandler,
  type,
}) {
  const typeCheck = () => {
    return type === 'signin' ? 'Sign In' : 'Sign Up';
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>{typeCheck()}</h2>
      <p>{message}</p>
      <label>
        Email:
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <input type="submit" value={typeCheck()} />
    </form>
  );
}