import React, { useState } from 'react';

const Predict = () => {
  const [year, setYear] = useState('');
  const [loading, setLoading] = useState(false);
  const [nextYear, setNextYear] = useState(null);
  const [loadingText, setLoadingText] = useState('Consulting the time gods...');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const numericYear = Number(year);
    if (!year || isNaN(numericYear)) {
      alert('Please enter a valid year!');
      return;
    }

    if (numericYear <= 0) {
      alert('Sorry, we only predict years that actually exist! 🤷‍♂️');
      return;
    }

    setLoading(true);
    setNextYear(null);
    setLoadingText('Consulting the time gods...');

    setTimeout(() => {
      setLoadingText('Verifying with ancient calendar scrolls...');
    }, 5000);

    setTimeout(() => {
      setNextYear(numericYear + 1);
      setLoading(false);
    }, 15000);
  };

  return (
    <div
      style={{
        paddingTop: '80px',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>
        🔮 Enter a Year to Predict the Next
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            marginRight: '10px',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: '#2c3e50',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Predict
        </button>
      </form>

      {loading && (
        <div style={{ marginTop: '30px' }}>
          <div className="spinner" style={{
            width: '40px',
            height: '40px',
            border: '4px solid #ccc',
            borderTop: '4px solid #2c3e50',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto'
          }}></div>
          <p style={{ marginTop: '20px', fontSize: '16px', color: '#666' }}>{loadingText}</p>
        </div>
      )}

      {nextYear && !loading && (
        <p style={{ fontSize: '24px', marginTop: '30px' }}>
          🧠 Prediction Complete: <strong>{nextYear}</strong>
        </p>
      )}

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Predict;
