import React from 'react';
// import './App.css';

const VintageTemplate = ({ data }) => {
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
    
    <div className="invitation vintage">
      <div className="vintage-border">
        <div className="vintage-header">

        <div className="floral-animation" style={{background: '#f9f3f0'}}>
            <div className="floral-decoration"></div>
        </div>

          <h1 style={{ color: data.themeColor }}>Wedding Invitation</h1>
          <div className="ornament"></div>
        </div>
        <div className="vintage-content">
          <p>The wedding of</p>
          <h2>{data.groomName}</h2>
          <p>and</p>
          <h2>{data.brideName}</h2>
          <p>request the pleasure of your company</p>
          <p>on {formatDate(data.weddingDate)} at {formatTime(data.weddingDate)}</p>
          <p>{data.location}</p>
        </div>
        
        <div className="vintage-footer">
          <p>Dinner & Dancing to follow</p>
        </div>
      </div>
    </div>
  );
};

export default VintageTemplate;