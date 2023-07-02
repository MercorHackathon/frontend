import React, { useState } from 'react';
import './emphome.css';

const EmpHome = () => {
  const [button1State, setButton1State] = useState(false);
  const [twitterUsername, setTwitterUsername] = useState('');
  
  const handleButtonClick = () => {
    setButton1State(!button1State);
  };

  const handleUsernameChange = (e) => {
    setTwitterUsername(e.target.value);
  };

  const handleSubmit = () => {
    // Replace 'dummy-address' with the actual endpoint to send the data
    const data = {
      permission: button1State,
      twitterUsername: twitterUsername
    };
    fetch('dummy-address', {
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
    <div className='cont'>
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
        <label htmlFor="twitter-username">Enter your Twitter username:</label>
        <input
          type="text"
          id="twitter-username"
          value={twitterUsername}
          onChange={handleUsernameChange}
          className="text"
        />
      </div>
      <button className='submit' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default EmpHome;
