import React, { useState } from 'react';
import verte from '../images/verte.jpg';

export default function Home() {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Faites quelque chose avec la valeur de recherche, par exemple une recherche API
    console.log('Recherche soumise :', searchText);
  };

  return (
    <>
      <br />
      <h1 style={{ textAlign: 'center', fontFamily: 'cursive' }}>
         La pharmacie : votre alliée pour une santé optimale
      </h1>

      <br />
      <form onSubmit={handleSearchSubmit} style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input
            type="text"
            placeholder="Rechercher..."
            value={searchText}
            onChange={handleSearchChange}
            style={{
              padding: '8px',
              borderRadius: '4px',
              marginRight: '4px',
              width: '300px',
              border: '1px solid #ccc',
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: 'green',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Rechercher
          </button>
        </div>
      </form>

      <br />
      <img
        src={verte}
        alt="cc"
        style={{ display: 'block', margin: 'auto' }}
        height="490px"
        width="1500px"
      />
    </>
  );
}
