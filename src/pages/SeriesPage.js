import React, { Component } from 'react';
import SeriesTemplate from '../components/series/SeriesTemplate';
import SeriesHeader from '../components/series/SeriesHeader/SeriesHeader';
import SeriesMain from '../components/series/SeriesMain';

class SeriesPage extends Component {
  handleClickMenu = () => {
    console.log('Clicked Menu');
  }

  handleClickPlayNow = () => {
    console.log('Clicked PlayNow');
  }

  render() {
    const { data } = this.props;
    return (
      <SeriesTemplate>
        <SeriesHeader 
          thumbnail={data.img} 
          name={data.name}
          genres={data.genres}
          startYear={data.start_year}
          endYear={data.end_year}
          onClickMenu={this.handleClickMenu}
          onClickPlayNow={this.handleClickPlayNow}
        />
        <SeriesMain
          story={data.story}
          episodes={data.episodes}
        />
      </SeriesTemplate>
    );
  }
}

export default SeriesPage;