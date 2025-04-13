import React from 'react';
import VintageTemplate from '../components/VintageTemplate';
import AudioPlayer from '../components/AudioPlayer';

const PublicVintage = ({ data }) => {
  return (
    <div className="public-template">
      <VintageTemplate data={data} />
      <div className="public-audio-player">
        <AudioPlayer />
      </div>
    </div>
  );
};

export default PublicVintage;