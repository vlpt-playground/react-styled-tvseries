import React, { Component } from 'react';
import './EpisodeItemList.scss';
import EpisodeItem from '../EpisodeItem';
import LoadMoreEpisode from '../LoadMoreEpisode';

class EpisodeItemList extends Component {
  state = {
    limit: 2,
  }

  handleLoadMore = () => {
    const { episodes } = this.props;
    const { limit } = this.state;
    const nextLimit = limit + 3
    this.setState({
      limit: nextLimit > episodes.length ? episodes.length : nextLimit
    })
  }

  handlePlayEpisode = (id) => {
    console.log(`Playing episode ${id}`);
  }

  render() {
    const { episodes } = this.props;
    const { limit } = this.state;

    const episodeList = episodes.slice(0, limit).map(
      episode => (
        <EpisodeItem 
          thumbnail={episode.img}
          name={episode.name}
          key={episode.id}
          id={episode.id}
          onClick={this.handlePlayEpisode}
        />
      )
    )
    return (
      <div className="EpisodeItemList">
        {episodeList}
        { episodes.length !== limit && (
          <LoadMoreEpisode onClick={this.handleLoadMore} />
        ) }
      </div>
    );
  }
}

export default EpisodeItemList;