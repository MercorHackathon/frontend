import React, { useState } from 'react';
import './styles.module.css';

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
      {loginType === 'employee' ? (
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
      ) : (
        <div className="login-section">
          <h2>Manager Login</h2>
          <input
            type="text"
            placeholder="Manager ID"
            value={mngId}
            onChange={(e) => setMngId(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={mngPassword}
            onChange={(e) => setMngPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}

      <div className="login-type-selector">
        {loginType === 'employee' ? (
          <button onClick={handleLoginTypeChange}>Login as Manager</button>
        ) : (
          <button onClick={handleLoginTypeChange}>Login as Employee</button>
        )}
      </div>
    </div>
  );
};

export default HomePage;
