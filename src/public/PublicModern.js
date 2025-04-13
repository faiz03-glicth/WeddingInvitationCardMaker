import React from 'react';
import ModernTemplate from '../components/ModernTemplate';
import AudioPlayer from '../components/AudioPlayer';

const PublicModern = ({ data }) => {
  return (
    <div className="public-template">
      <ModernTemplate data={data} />
      <div className="public-audio-player">
        <AudioPlayer />
      </div>
    </div>
  );
};

export default PublicModern;