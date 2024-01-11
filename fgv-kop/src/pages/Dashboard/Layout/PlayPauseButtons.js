// PlayPauseButtons.js

import React, { useState } from 'react';

const PlayPauseButtons = ({ onPlay, onPause }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
    isPlaying ? onPause() : onPlay();
  };

  return (
    <div style={{zIndex:1}}>
      {isPlaying ? (
        <button onClick={handleTogglePlay}>Pause</button>
      ) : (
        <button onClick={handleTogglePlay}>Play</button>
      )}
    </div>
  );
};

export default PlayPauseButtons;
