import React from 'react';
import './screen3.css'; // Make sure this path is correct for your CSS file

const GuideSheetModal = () => {
  return (
    <div className="guide-sheet-modal">
      <div className="modal-content">
        <button className="close-button">X</button>
        <h2>Guide Sheet</h2>
        <div className="content-body">
          <p>Can you figure out the definition of setting from the following examples?</p>
          {/* Content here is blurred, presumably some kind of image or text */}
          <div className="blurred-content">
            {/* Placeholder for blurred content */}
          </div>
          <p>So, what do you think the definition of setting is?</p>
          <p>Any guesses?</p>
          <div className="definition">
            <p>&gt; Setting is the time and place of a story.</p>
          </div>
          <div className="hint">
            <span>Hint:</span>
            {/* Icons could be implemented as components or images */}
            <div className="icons">
              <span className="icon-clock"></span> {/* Replace with actual icon */}
              <span className="icon-location"></span> {/* Replace with actual icon */}
            </div>
          </div>
        </div>
        <div className="footer">
          {/* Footer content goes here, possibly navigation buttons */}
        </div>
      </div>
    </div>
  );
};

export default GuideSheetModal;
