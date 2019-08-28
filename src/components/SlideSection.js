import React from 'react';
import '../css/Section.css';
import '../css/Slider.css';
import * as allCards from './Cards';
import { getDataToDisplay } from '../util.js';

class SlideSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.previousCard = this.previousCard.bind(this);
    this.nextCard = this.nextCard.bind(this);
  }

  previousCard() {
    const lastIndex = this.props.cardData.length - 1;
    const currentIndex = this.state.index;
    const index = currentIndex === 0 ? lastIndex : currentIndex - 1;
    this.setState({
      index: index,
    });
  }

  nextCard() {
    const lastIndex = this.props.cardData.length - 1;
    const currentIndex = this.state.index;
    const index = currentIndex === lastIndex ? 0 : currentIndex + 1;
    this.setState({
      index: index,
    });
  }

  render() {
    const Card = allCards[this.props.cardType];
    const dataToDisplay = getDataToDisplay(this.props.cardData, this.state.index);
    return (
      <div className="container">
        <div className="section-head row center justify-between">
          <a href='#'>{this.props.title} ➡</a>
          <a href='#'>VIEW ALL</a>
        </div>
        <div className="slider row">
          <div className="slider-btn slider-left" onClick={this.previousCard}>⬅</div>
          <div className="slider-btn slider-right" onClick={this.nextCard}>➡</div>
          {dataToDisplay.map(data =>
            <Card data={data} key={this.props.cardData.indexOf(data)} />
          )}
        </div>
      </div>
    );
  }
}

export default SlideSection;
