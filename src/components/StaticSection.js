import React from 'react';
import '../css/Section.css';
import * as allCards from './Cards';
import Display from './Display';

class StaticSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDisplay: false,
    };
    this.changeDisplay = this.changeDisplay.bind(this);
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  changeDisplay(event) {
    if (event.currentTarget.classList.contains('active')) {
      event.currentTarget.classList.remove('active');
      this.toggleDisplay();
    } else {
      document.querySelectorAll('.how-we-help').forEach(node => node.classList.remove('active'));
      event.currentTarget.classList.add('active');
      this.setActiveCard(event.currentTarget.getAttribute('data-index'));
      if (!this.state.showDisplay) {
        this.toggleDisplay();
      }
    }
  }

  toggleDisplay() {
    this.setState({
      showDisplay: !this.state.showDisplay,
    });
  }

  setActiveCard(index) {
    this.setState({
      activeCard: index,
    });
  }

  render() {
    const Card = allCards[this.props.cardType];
    return (
      <div>
        <div className="container static-section">
          <div className="section-head">
            <h1>{this.props.title}</h1>
          </div>
          <div className="static-cards row">
            {this.props.cardData.map(data =>
              <Card data={data} click={this.changeDisplay} index={this.props.cardData.indexOf(data)} key={this.props.cardData.indexOf(data)} />
            )}
          </div>
        </div>
        {this.state.showDisplay && <Display data={this.props.cardData[this.state.activeCard]} />}
      </div>
    );
  }
}

export default StaticSection;
