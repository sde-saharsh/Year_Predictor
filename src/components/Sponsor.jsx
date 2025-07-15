import React from 'react';

const Sponsor = () => {
  return (
    <div
      style={{
        paddingTop: '80px',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '20px',
        paddingRight: '20px',
        backgroundColor: '#fdfdfd',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          maxWidth: '600px',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 8px 18px rgba(0, 0, 0, 0.08)',
          fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
          color: '#2c3e50',
          fontSize: '14.5px',
          lineHeight: '1.6',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '20px',
            fontSize: '24px',
            color: '#1a1a1a',
          }}
        >
          💸 Sponsor Us
        </h2>

        <p>
          Ever dreamed of backing a project that’s... well, slightly ridiculous?
          You’re in luck.
        </p>

        <p>
          At <strong>NextYear.AI</strong>, we’re on a mission to take the obvious —
          and make it overly dramatic.
        </p>

        <ul style={{ marginLeft: '20px', marginBottom: '16px', listStyleType: '"👉 "' }}>
          <li>➕ Predicting the next year with suspicious accuracy</li>
          <li>🤖 Using buzzwords to make simple math sound complicated</li>
          <li>🎭 Looking very official for no good reason</li>
        </ul>

        <p>Accepted sponsorships include:</p>

        <ul style={{ marginLeft: '20px', marginBottom: '16px', listStyleType: '"👉 "' }}>
          <li>🍕 Pizza — our fuel</li>
          <li>☕ Coffee — our power source</li>
          <li>💰 Actual money — if you insist</li>
        </ul>

        <p style={{ textAlign: 'center' }}>
          Be part of the joke. <br />
          <strong>#SponsorTheFuture</strong>
        </p>
      </div>
    </div>
  );
};

export default Sponsor;
