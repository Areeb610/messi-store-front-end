// RegisterPage.js
import React, { useState } from 'react';
import LoginComponent from '../../components/Login/Login';
import SignUp from '../../components/SignUp/SignUp';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';

const RegisterPage = () => {
  const [isLoginForm, setLoginForm] = useState(true);

  const handleLogin = (email, password) => {
    // Handle login logic
    console.log('Login:', email, password);
  };

  const handleSignup = (firstName, lastName, email, password, confirmPassword) => {
    // Handle signup logic
    console.log('Signup:', firstName, lastName, email, password, confirmPassword);
  };

  const toggleForm = () => {
    setLoginForm(!isLoginForm);
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        {isLoginForm ? (
          <LoginComponent onLogin={handleLogin} onToggleForm={toggleForm} />
        ) : (
          <SignUp onSignUp={handleSignup} onToggleForm={toggleForm} />
        )}
      </div>
        <Footer />
    </div>
  );
};

export default RegisterPage;
