import React, { useState, useEffect } from 'react';
import './App.css';

const initProfile = {
  followers: null,
  publicRepos: null
}

function App() {
  const [profile, setProfile] = useState(initProfile)
  
  useEffect(() => {
    getProfile()
  }, [])

  async function getProfile() {
    const response = await fetch('https://api.github.com/users/gitmil')
    const json = await response.json()

    setProfile({
      followers: json.followers,
      publicRepos: json.public_repos
    })
  }

  return (
    <div className="App">
      <h2>fetch data</h2>

      followers: {profile.followers} <br />
      public_repos: {profile.publicRepos}
      
    </div>
  );
}

export default App;