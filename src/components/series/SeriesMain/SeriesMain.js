import React from 'react';
import './SeriesMain.scss';
import EpisodeItemList from '../EpisodeItemList';

const SeriesMain = ({story, episodes}) => {
  return (
    <div className="SeriesMain">
      <div className="wrapper">
        <div className="content">
          <section>
            <h2>에피소드</h2>
            <EpisodeItemList episodes={episodes} />
          </section>
          <section>
            <h2>줄거리</h2>
            <p>{story}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SeriesMain;