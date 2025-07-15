import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: '80vh',
        paddingTop: '80px', // for navbar space
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#fdfdfd',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      }}
    >
      <h1 style={{ fontSize: '36px', color: '#2c3e50' }}>
        🔮 Welcome to NextYear.AI
      </h1>

      <p style={{ fontSize: '18px', color: '#555', marginTop: '10px' }}>
        The smartest way to find the obvious.
      </p>

      <button
        onClick={() => navigate('/predict')}
        style={{
          marginTop: '30px',
          padding: '12px 28px',
          backgroundColor: '#2c3e50',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
          transition: '0.3s',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#444')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#2c3e50')}
      >
        Predict Now
      </button>
    </div>
  );
};

export default Home;
