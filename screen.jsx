import React from 'react';
import './App.css'; // This is where the CSS you'll create will be imported

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <button className="week-button">Week 1</button>
        <div className="header-icons">
          {/* Replace with actual image paths */}
          <img src="path-to-pencil-icon" alt="Pencil" />
          <img src="path-to-book-icon" alt="Book" />
        </div>
      </header>
      <main className="content">
        <h1 className="title">Elements of Story Writing</h1>
        <p className="introduction">
          Welcome to term 2 of Writers Club. Are you excited for this amazing journey?
          Over the next week, we will be practicing the different elements of story writing.
          Our aim is to make stories more interesting and exciting.
        </p>
        <div className="elements-introduction">
          <p>
            There are five elements which make the foundation for story writing.
            An element is an essential part of something and every fiction story
            has the same key elements:
          </p>
          <div className="elements-list">
            <span>SETTING</span>
            <span>CHARACTERS</span>
            <span>PLOT</span>
            <span>PROBLEM OR CONFLICT</span>
            <span>RESOLUTION</span>
          </div>
        </div>
        <div className="lesson-note">
          <p>For today’s lesson, we will try to understand and practice writing the setting for our stories.</p>
          <p>The setting is an important element of every fiction story.</p>
        </div>
      </main>
      <footer className="footer">
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default Screen;
