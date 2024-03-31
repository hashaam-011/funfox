// ActivityGuideModal.jsx
import React from 'react';
import './screen6.css'; // Make sure the CSS file path is correct

const ActivityGuideModal = () => {
  return (
    <div className="activity-guide-modal">
      <div className="modal-header">
        <h2>Activity 1</h2>
        <button className="close-button">X</button>
      </div>
      <h3>Guide Sheet</h3>
      <div className="activity-table">
        <div className="table-row header-row">
          <div className="table-cell">Who is in the picture?</div>
          <div className="table-cell">Where are the characters?</div>
          <div className="table-cell">What is happening in the picture?</div>
          <div className="table-cell">When is this taking place?</div>
          <div className="table-cell">How would you describe this setting?</div>
        </div>
        <div className="table-row answer-row">
          <div className="table-cell">A dog and a girl</div>
          <div className="table-cell">At a park</div>
          <div className="table-cell">They are taking a walk</div>
          <div className="table-cell">In the evening</div>
          <div className="table-cell description-cell">
            The sun shone brightly as Wolfie and I leisurely strolled through the Centennial park.
            Surrounded by blooming flowers and chirping birds, I enjoyed the feeling of wind
            caressing my cheeks knowing I had an entire hour to get home.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityGuideModal;
