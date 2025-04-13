import React from 'react';
// import './App.css';

const ModernTemplate = ({ data }) => {
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
    <div className="invitation modern">
      <div className="modern-header" style={{ backgroundColor: data.themeColor }}>
        <h1>{data.groomName} & {data.brideName}</h1>
        <h2>Celebrate Our Union</h2>
      </div>
      
        <div className="modern-content">
            <div className="floral-animation" style={{backgroundColor: 'themeColor'}}>
            <div className="floral-decoration"></div>
        </div>

        <div className="modern-details">
          <p className="date">{formatDate(data.weddingDate)}</p>
          <p className="time">{formatTime(data.weddingDate)}</p>
          <p className="location">{data.location}</p>
        </div>
        <div className="modern-footer">
          <p>Join us as we begin our new journey together</p>
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;