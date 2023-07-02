import React, { useState } from 'react';
import './homepage.css';

const HomePage = () => {
  const [loginType, setLoginType] = useState('employee');
  const [empId, setEmpId] = useState('');
  const [empPassword, setEmpPassword] = useState('');
  const [mngId, setMngId] = useState('');
  const [mngPassword, setMngPassword] = useState('');

  const handleLoginTypeChange = () => {
    setLoginType(loginType === 'employee' ? 'manager' : 'employee');
  };

  const handleLogin = () => {
    if (loginType === 'employee') {
      // Handle employee login logic here
      console.log('Employee Login:', empId, empPassword);
    } else {
      // Handle manager login logic here
      console.log('Manager Login:', mngId, mngPassword);
    }
  };

  return (
    <div className="homepage-container">
    
        <div className="login-section">
          <h2>Employee Login</h2>
          <input
            type="text"
            placeholder="Employee ID"
            value={empId}
            onChange={(e) => setEmpId(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={empPassword}
            onChange={(e) => setEmpPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
     
    </div>
  );
};

export default HomePage;
