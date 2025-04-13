import React from 'react';
import ClassicTemplate from '../components/ClassicTemplate';
import AudioPlayer from '../components/AudioPlayer';

const PublicClassic = ({ data }) => {
  return (
    <div className="public-view">
      <ClassicTemplate data={data} />
      <div className="public-audio-player">
        <AudioPlayer />
      </div>
    </div>
  );
};

export default PublicClassic;