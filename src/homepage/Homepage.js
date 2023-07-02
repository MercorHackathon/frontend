import React, { useState } from 'react';
import './styles.module.css';

const HomePage = () => {
  const [empId, setEmpId] = useState('');
  const [empPassword, setEmpPassword] = useState('');
  const [mngId, setMngId] = useState('');
  const [mngPassword, setMngPassword] = useState('');

  const handleEmpLogin = () => {
    // Handle employee login logic here
    console.log('Employee Login:', empId, empPassword);
  };

  const handleMngLogin = () => {
    // Handle manager login logic here
    console.log('Manager Login:', mngId, mngPassword);
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
        <button onClick={handleEmpLogin}>Login</button>
      </div>
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
        <button onClick={handleMngLogin}>Login</button>
      </div>
    </div>
  );
};

export default HomePage;
