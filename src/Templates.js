import React from 'react';
import './App.css';

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

export const ClassicTemplate = ({ data }) => {
  return (
    <div className="invitation classic" style={{ borderColor: data.themeColor }}>
      {data.couplePhoto && (
        <div className="couple-photo">
          <img src={data.couplePhoto} alt="Couple" />
        </div>
      )}
      <h3>You're Invited To The Wedding Of</h3>
      <h1 style={{ color: data.themeColor }}>{data.brideName} & {data.groomName}</h1>
      <div className="divider" style={{ backgroundColor: data.themeColor }}></div>
      <p>On {formatDate(data.weddingDate)} at {formatTime(data.weddingDate)}</p>
      <p>{data.location}</p>
      <p className="rsvp">Please RSVP by {data.weddingDate ? new Date(data.weddingDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' }) : ''}</p>
    </div>
  );
};

export const ModernTemplate = ({ data }) => {
  return (
    <div className="invitation modern">
      <div className="modern-header" style={{ backgroundColor: data.themeColor }}>
        <h1>{data.brideName} & {data.groomName}</h1>
        <h2>Celebrate Our Union</h2>
      </div>
      <div className="modern-content">
        {data.couplePhoto && (
          <div className="couple-photo">
            <img src={data.couplePhoto} alt="Couple" />
          </div>
        )}
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

export const VintageTemplate = ({ data }) => {
  return (
    <div className="invitation vintage">
      <div className="vintage-border">
        <div className="vintage-header">
          <h1 style={{ color: data.themeColor }}>Wedding Invitation</h1>
          <div className="ornament"></div>
        </div>
        <div className="vintage-content">
          <p>Together with their families</p>
          <h2>{data.brideName}</h2>
          <p>and</p>
          <h2>{data.groomName}</h2>
          <p>request the pleasure of your company</p>
          <p>on {formatDate(data.weddingDate)} at {formatTime(data.weddingDate)}</p>
          <p>{data.location}</p>
        </div>
        {data.couplePhoto && (
          <div className="couple-photo">
            <img src={data.couplePhoto} alt="Couple" />
          </div>
        )}
        <div className="vintage-footer">
          <p>Dinner & Dancing to follow</p>
        </div>
      </div>
    </div>
  );
};