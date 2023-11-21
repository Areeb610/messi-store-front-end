import React, { useState } from 'react';
import { MDBInput, MDBBtn, MDBNavbarLink } from 'mdb-react-ui-kit';
import './Login.css';

const LoginComponent = ({ onLogin, onToggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    onLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center mb-4">Login</h2>
      <MDBInput style={{marginBottom: 10}} label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <MDBInput style={{marginBottom: 10}} label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <MDBBtn className='button' rounded type="submit" color="primary">
        Login
      </MDBBtn>
      <p className="text-center mt-3">
        Don't have an account?{' '}
        <MDBNavbarLink to="#" className="d-inline" onClick={onToggleForm}>
          Sign Up
        </MDBNavbarLink>
      </p>
    </form>
  );
};

export default LoginComponent;
