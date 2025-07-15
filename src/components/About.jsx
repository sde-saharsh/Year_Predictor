import React from 'react';
import './About.css';

const About = () => {
  return (
    <div style={{ paddingTop: "80px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="about-box">
        <h2>🧠 About NextYear.AI</h2>
        <p>
          NextYear.AI began with a simple question: <strong>What comes after a year?</strong>
          And from that deep curiosity... was born something truly unnecessary.
        </p>
        <p>
          Powered by buzzwords like “deep learning,” “temporal intelligence,” and “TimeFlow™ protocols,” our system confidently delivers 
          the next number in a sequence — with 100% accuracy* (*in most cases).
        </p>
        <p>
          We’ve trained on globally recognized calendars, consulted self-proclaimed time theorists, and even considered using a real algorithm.
          But in the end, we settled on something much simpler — and honestly, more fun.
        </p>
        <p>
          Some say the answer was obvious. We prefer to say: <em>elegantly inevitable</em>. 😉
        </p>
        <p>
          Whether you're here for answers, entertainment, or just to see how far someone will go to make a website that adds 1 to a number —  
          we're glad you stopped by.
          <br />
          <strong>Welcome to NextYear.AI.</strong>
        </p>
      </div>
    </div>
  );
};

export default About;
