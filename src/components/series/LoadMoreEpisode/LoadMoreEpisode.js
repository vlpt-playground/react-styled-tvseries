import React from 'react';
import MoreIcon from 'react-icons/lib/md/more-horiz';
import './LoadMoreEpisode.scss';


const LoadMoreEpisode = ({ onClick }) => {
  return (
    <div className="LoadMoreEpisode" onClick={onClick}>
      <div className="icon-circle">
        <MoreIcon />
      </div>
      <div className="text">더보기</div>
    </div>
  );
};

export default LoadMoreEpisode;