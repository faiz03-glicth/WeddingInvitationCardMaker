import React, { useState, useEffect, useRef } from 'react';
import weddingSong from '../assets/A Thousand Years.mp3';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio(weddingSong);
    audioRef.current.loop = true;

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    // Handle play/pause
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="audio-player">
      <button onClick={() => setIsPlaying(!isPlaying)} className="music-toggle">
        {isPlaying ? '🔊 Music On' : '🔇 Music Off'}
      </button>
    </div>
  );
};

export default AudioPlayer;