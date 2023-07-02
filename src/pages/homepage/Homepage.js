import React, { useState } from 'react';
import './homepage.css';
import axios from 'axios';
import { useNavigate } from 'react-router';

const HomePage = () => {
  const [empId, setEmpId] = useState('');
  const [empPassword, setEmpPassword] = useState('');
  const [ hasLoginFailed, setHasLoginFailed ] = useState(false);
  const navigate = useNavigate()

  const handleLogin = async () => {
    setHasLoginFailed(false);
    const url = `${process.env.REACT_APP_API_URL}/api/login`
    const creds = {
      username: empId,
      password: empPassword,
    }
    try {
      const data = (await axios.post(url, creds)).data;
      if (data.status === 'success') {
        // document.cookie= `token=${data.token}`
        localStorage.setItem('token', data.token);
        navigate('/empHome')
      }
      else {
        setHasLoginFailed(true);
      }
    }
    catch(err) {
      console.log("Failed to login");
    }

  };

  return (
    <div className="homepage-container">
    
        <div className="login-section">
          {hasLoginFailed && <p id="login-failed">Invalid username or password</p>}
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
