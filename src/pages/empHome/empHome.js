import React, { useState } from 'react';
import './emphome.css';

const EmpHome = () => {
  const [button1State, setButton1State] = useState(false);
  const [twitterUsername, setTwitterUsername] = useState('');
  const [username, setUsername] = useState('');
  const [apiKey, setApiKey] = useState('');

  const handleButtonClick = () => {
    setButton1State(!button1State);
  };

  const handleUsernameChange = (e) => {
    setTwitterUsername(e.target.value);
  };

  const handleApikeyChange = (e) => {
    setApiKey(e.target.value);
  };

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    // Replace 'dummy-address' with the actual endpoint to send the data
    const data = {
      permission: button1State,
      twitterUsername: twitterUsername,
      username: username,
      apiKey: apiKey
    };
    fetch('http://localhost:8080/Phealth', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(result => {
        // Handle the response if needed
        console.log(result);
      })
      .catch(error => {
        // Handle the error if needed
        console.error(error);
      });
  };

  return (
    <div className="perm-cont">
      <h1>Manage Permissions</h1>
      <div className='cont'>
        <div className="username-input">
          <label htmlFor="twitter-username">Twitter Username:</label>
          <input
            type="text"
            id="twitter-username"
            value={twitterUsername}
            onChange={handleUsernameChange}
            className="text input-box"
            // Disable the input if button1State is false
          />
        </div>

        <div className="permission">
          <label htmlFor="permission">Click to change permissions:</label>
          <div
            className={`button ${button1State ? 'active' : ''}`}
            onClick={handleButtonClick}
          >
            {button1State
              ? 'Permission allowed for Google Fit access'
              : 'Permission not allowed for Google Fit access'}
          </div>
        </div>
        
        <div className="username-input">
          <label htmlFor="username">Enter your username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="text input-box"
            disabled={!button1State} // Disable the input if button1State is false
          />
        </div>
        <div className="username-input">
          <label htmlFor="apiKey">Enter your API Key:</label>
          <input
            type="text"
            id="apiKey"
            value={apiKey}
            onChange={handleApikeyChange}
            className="text input-box"
            disabled={!button1State} // Disable the input if button1State is false
          />
        </div>
        <button className='submit' onClick={handleUsernameSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default EmpHome;
