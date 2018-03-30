import React from 'react';
import PlayIcon from 'react-icons/lib/md/play-arrow';
import './EpisodeItem.scss';

const EpisodeItem = ({ thumbnail, name, id, onClick }) => {
  return (
    <div className="EpisodeItem" onClick={() => onClick(id)}>
      <div className="episode-thumbnail">
        <img src={thumbnail} alt="episode-thumbnail" />
        <div className="play-circle">
          <PlayIcon />
        </div>
      </div>
      <div className="title">
        {name}
      </div>
    </div>
  );
};

export default EpisodeItem;