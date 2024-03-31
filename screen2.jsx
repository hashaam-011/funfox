// Screen.jsx
import React from 'react';
import './screen2.css'; // Make sure this path matches the name and location of your CSS file

const Screen = () => {
  return (
    <div className="screen-container">
      <div className="question-container">
        <h2>Can you figure out the definition of setting from the following examples?</h2>
        <p>(take a minute to think about this)</p>
      </div>
      <div className="examples-container">
        <div className="example">
          <img src="path-to-beach-image" alt="Sunny day at a beach" />
          <p>Sunny day at a beach</p>
        </div>
        <div className="example">
          <img src="path-to-haunted-house-image" alt="A cold rainy night in a haunted house in October" />
          <p>A cold rainy night in a haunted house in October</p>
        </div>
      </div>
      <div className="definition-container">
        <p>So, what do you think the definition of setting is?</p>
        <p>Any guesses?</p>
        <div className="hint">
          <span>Hint:</span>
          <p>Setting is the time and place of a story. It often answers the questions: when? and where?</p>
        </div>
      </div>
      <div className="pagination">
        <button>❮</button>
        <span>2</span>
        <button>❯</button>
      </div>
    </div>
  );
};

export default Screen;
