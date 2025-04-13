import React from 'react';
// import './App.css';
import AudioPlayer from './AudioPlayer';

const ClassicTemplate = ({ data }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const formatTime = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    
    <div className="invitation classic" style={{ borderColor: data.themeColor }}>
        <div className="floral-animation">
            <div className="floral-decoration"></div>
        </div>
        <AudioPlayer />
      <h3>You're Invited To The Wedding Of</h3>
      <h1 style={{ color: data.themeColor }}>{data.groomName} & {data.brideName}</h1>
      <div className="divider" style={{ backgroundColor: data.themeColor }}></div>
      <p>On {formatDate(data.weddingDate)} at {formatTime(data.weddingDate)}</p>
      <p>{data.location}</p>
      <p className="rsvp">Please RSVP by {data.weddingDate ? new Date(data.weddingDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' }) : ''}</p>
    </div>
  );
};

export default ClassicTemplate;