import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
const RegisterPage = () => {

  const history = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async () => {

    console.log(firstName,lastName,email,password,confirmPassword);
    const data = {
      "first_name":firstName,
      "last_name":lastName,
      "email":email,
      "password":password,
      "conf_password":confirmPassword
    };
    const url="http://localhost:3100/register";
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    
    const res = await response.json();
    if(res.message == "Registration Successful"){
      history("/login");
    }
  };

  return (
    <div className="register-page">
      <div className="register-form">
        <h1 className='register-heading'>Register</h1>
        <div className='register-row'>
          <label className='register-label' htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='register-row'>
          <label className='register-label' htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className='register-row'>
          <label className='register-label' htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='register-row'>
          <label className='register-label' htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='register-row'>
          <label className='register-label' htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Register</button>
        <Link className='link' to="/login">Already have an account? Click here!</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
