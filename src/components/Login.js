import React, { useState } from 'react';
import './Login.css'; 
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


const LoginPage = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState(null);

  const history = useNavigate();

  const handleLogin = async () => {
    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);

    setError(null);

    const data = {
      email:username,
      password:password
    };
    const url="http://localhost:3100/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const res = await response.json();
    console.log(res);
    if(res.message == "Login successful!"){
      props.setCookie(res.jwt);
      history("/");
    }
  }

  return (
    <div className="register-page">
      <div className='login-form'>
        <h1 className='register-heading'>Login</h1>
        <div>
          <div className="register-row">
            <label className='register-label'>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="register-row">
            <label className='register-label'>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <Link  className='link' to="/register">Don't have an account have an account? Click here!</Link>
      </div>
    </div>
  );
};

export default LoginPage;
