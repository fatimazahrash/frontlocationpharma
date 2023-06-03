import React, { useState } from 'react';
import Home from './Home';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Votre logique de connexion ici
    if (username === 'fati' && password === '123') {
      console.log('./components/Home');
      // Redirigez vers la page suivante ou effectuez d'autres actions
    } else {
      console.log('Nom d\'utilisateur ou mot de passe incorrect');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'green' }}>
      <div style={{ width: '400px', height: '400px', padding: '20px', borderRadius: '8px', backgroundColor: 'white', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}>
        <h2 style={{ textAlign: 'center', color: 'green' }}>Connexion</h2>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', color: 'green' }}>Nom d'utilisateur:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid green' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', color: 'green' }}>Mot de passe:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid green' }}
            />
          </div>
          <button type="submit" style={{ width: '100%', padding: '8px', backgroundColor: 'green', color: 'white', borderRadius: '4px', border: 'none' }}>
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
