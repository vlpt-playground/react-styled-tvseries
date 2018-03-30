import React from 'react';
import MenuIcon from 'react-icons/lib/md/menu';
import PlayIcon from 'react-icons/lib/md/play-arrow';
import './SeriesHeader.scss';

const SeriesHeader = ({
  thumbnail,
  name,
  genres,
  startYear,
  endYear,
  onClickMenu,
  onClickPlayNow
}) => {
  return (
    <div className="SeriesHeader">
      <div className="wrapper">
        <header>
          <div className="logo">TVSERIES</div>
          <div className="menu-button" onClick={onClickMenu}><MenuIcon /></div>
        </header>
        <div className="header-contents">
          <div className="thumbnail-area">
            <div className="floating-thumbnail">
              <img src={thumbnail} alt="thumbnail"/>
            </div>
          </div>
          <div className="information">
            <div>
              <h1>{name}</h1>
              <div className="sub-info">
                <span>{genres.join(' / ')}</span>
                <span>{startYear}-{endYear}</span>
              </div>
            </div>
            <div className="play-button" onClick={onClickPlayNow}>
              <PlayIcon/> 지금 재생하기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriesHeader;