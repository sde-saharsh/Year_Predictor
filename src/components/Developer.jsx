import React from 'react';
import './Developer.css';

const Developer = () => {
  return (
    <div className="dev-container">
      <div className="dev-box">
        <h2>👨‍💻 Developer</h2>
        <p>
          Built by a highly trained human who bravely tackled one of humanity’s greatest challenges:
          <br />
          <strong>figuring out what comes after a number.</strong>
        </p>
        <p>
          After countless sleepless nights (and even more coffee), they finally cracked the code:
          <br />
          <em>If you add 1 to a year... you get the next year. 🤯</em>
        </p>

        <div className="dev-list">
          <h4>Rumored to have used:</h4>
          <ul>
            <li>🧠 Artificial Intelligence — to pick a cool project name</li>
            <li>🤖 Machine Learning — to learn how to use a calculator</li>
            <li>☕ Coffee — because hydration is overrated</li>
            <li>🧘 Procrastination — as the core development strategy</li>
          </ul>
        </div>

        <div className="dev-jobs">
          <h4>Now open to job offers such as:</h4>
          <ul>
            <li>🛠️ Time Travel Debugger</li>
            <li>📅 Calendar Evangelist</li>
            <li>➕ Senior “+1” Engineer</li>
            <li>🍕 Anything that pays in pizza, memes, or emotional support</li>
          </ul>
        </div>

        <p className="footer-note">
          This project was made with <span>90% sarcasm</span>, <span>10% actual coding</span>, and <span>100% love 💖</span>
        </p>
      </div>
    </div>
  );
};

export default Developer;
