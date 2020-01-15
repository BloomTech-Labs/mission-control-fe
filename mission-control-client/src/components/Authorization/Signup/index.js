import React from 'react';

import styles from '../../../styles/signup.module.scss';

const Signup = props => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('logging you in');
  };

  const handleRoute = e => {
    e.preventDefault();
    console.log('rendering signup component');
    props.history.push('/login');
  };

  return (
    <div className={styles['wrapper']}>
      <div className={styles['container']}>
        <h1 className={styles['signup-header']}>Sign Up for Mission Control</h1>
        <form className={styles['signup-form']} onSubmit={handleSubmit}>
          <input name="username" type="text" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />
          <button className={styles['signup-button']} type="submit">
            Sign Up
          </button>
        </form>
        <div className={styles['login']}>
          <p>Already have an account?</p>
          <button
            className={styles['login-button']}
            type="button"
            onClick={handleRoute}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
