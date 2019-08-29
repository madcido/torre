import React from 'react';
import '../css/Section.css';
import '../css/Slider.css';
import * as allCards from './Cards';
import { getDataToDisplay } from '../util.js';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

class SlideSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      maxCards: 4,
    };
    this.changeCardNumber = this.changeCardNumber.bind(this);
    this.previousCard = this.previousCard.bind(this);
    this.nextCard = this.nextCard.bind(this);
  }

  componentDidMount() {
    this.changeCardNumber();
    window.addEventListener("resize", this.changeCardNumber);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.changeCardNumber);
  }

  changeCardNumber() {
    let n = 0;
    if (window.innerWidth < 660) {
      n = 1;
    } else if (window.innerWidth < 980) {
      n = 2;
    } else if (window.innerWidth < 1300) {
      n = 3;
    } else {
      n = 4;
    }
    this.setState({
      maxCards: n,
    });
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
    const dataToDisplay = getDataToDisplay(this.props.cardData, this.state.index, this.state.maxCards);
    return (
      <div className="container col center">
        <div className="section-head row center justify-between">
          <a href={this.props.anchor}>
            {this.props.title}
            <Icon path={mdiChevronRight} size={0.85} color='#00acc1' />
          </a>
          <a href={this.props.anchor}>VIEW ALL</a>
        </div>
        <div className='slider row justify-center'>
          <div className="slider-btn btn-style slider-left row center justify-center" onClick={this.previousCard}>
            <Icon path={mdiChevronLeft} size={1} color='#00acc1' />
          </div>
          {dataToDisplay.map(data =>
            <Card data={data} key={this.props.cardData.indexOf(data)} />
          )}
          <div className="slider-btn btn-style slider-right row center justify-center" onClick={this.nextCard}>
            <Icon path={mdiChevronRight} size={1} color='#00acc1' />
          </div>
        </div>
      </div>
    );
  }
}

export default SlideSection;
