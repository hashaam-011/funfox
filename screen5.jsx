import React from 'react';
import './screen5.css'; // Make sure this path is correct

const SettingDescription = () => {
  return (
    <div className="setting-description-container">
      <div className="instruction-text">
        <p>Another element to describe the setting could be the environment. How would you describe the place? What are the habitat and weather like? What plants, animals and other objects are in the place? Environment might include details that describe the weather, the noise level, or darkness.</p>
        <p>We can use adjectives or describing words to tell about the setting like:</p>
      </div>
      <div className="adjectives-container">
        {/* Add more adjectives as needed */}
        {['Sunny', 'Picturesque', 'Enchanting', 'Vibrant', 'Spectacular', 'Bustling', 'Remote', 'Creepy', 'Spooky', 'Deserted', 'Cold', 'Bright', 'Desolate'].map(adjective => (
          <span className="adjective" key={adjective}>{adjective}</span>
        ))}
      </div>
      <div className="writer-tip">
        <p>A good writer has the power to transport readers out of their sofa and into foreign lands.</p>
        <p>The settings you create for your story play a very important role.</p>
        <p>In order to make your setting come to life, the details you add to describe the place where the story happens are very important.</p>
        <p>Remember to "Show the Reader" and not simply "Tell".</p>
      </div>
      <div className="practice-prompt">
        <p>Let's practice, shall we?</p>
      </div>
      <div className="pagination">
        <button>❮</button>
        <span>3</span>
        <button>❯</button>
      </div>
    </div>
  );
};

export default SettingDescription;
