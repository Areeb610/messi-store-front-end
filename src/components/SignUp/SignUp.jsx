import React, { useState } from 'react';
import { MDBInput, MDBBtn, MDBNavbarLink } from 'mdb-react-ui-kit';
import './SignUp.css';

const SignUp = ({ onSignUp, onToggleForm }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    onSignUp(firstName, lastName, email, password, confirmPassword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center mb-4">Sign Up</h2>
      <MDBInput style={{marginBottom: 10}} label="First Name" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      <MDBInput style={{marginBottom: 10}} label="Last Name" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      <MDBInput style={{marginBottom: 10}} label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <MDBInput style={{marginBottom: 10}} label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <MDBInput
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <MDBBtn className='button'rounded type="submit" color="primary" >
        Sign Up
      </MDBBtn>
      <p className="text-center mt-3">
        Already have an account?{' '}
        <MDBNavbarLink to="#" className="d-inline" onClick={onToggleForm}>
          Login
        </MDBNavbarLink>
      </p>
    </form>
  );
};

export default SignUp;
