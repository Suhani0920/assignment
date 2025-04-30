import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if(email && password) {
      navigate('/account');
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div className="container" id='login'>
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <input type="email" placeholder="Enter email address" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="disabled" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
