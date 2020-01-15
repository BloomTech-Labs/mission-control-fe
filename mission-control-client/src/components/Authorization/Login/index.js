import React from 'react';

import styles from '../../../styles/login.module.scss';

const Login = props => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('logging you in');
  };

  const handleRoute = e => {
    e.preventDefault();
    console.log('rendering signup component');
    props.history.push('/signup');
  };

  return (
    <div className={styles['wrapper']}>
      <div className={styles['container']}>
        <h1 className={styles['login-header']}>Login to Mission Control</h1>
        <form className={styles['login-form']} onSubmit={handleSubmit}>
          <input name="username" type="text" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />
          <button className={styles['login-button']} type="submit">
            Login
          </button>
        </form>
        <div className={styles['signup']}>
          <p>Need an account?</p>
          <button
            className={styles['signup-button']}
            type="button"
            onClick={handleRoute}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
