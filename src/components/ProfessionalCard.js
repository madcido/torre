import React from 'react';
import '../css/Card.css';
import '../css/ProfessionalCard.css';
import HexagonBorder from './HexagonBorder';
import { people } from '../data/mock.js';
import { trimStr } from '../util.js';
import Icon from '@mdi/react';
import { mdiWeight, mdiCheckDecagram } from '@mdi/js';

class ProfessionalCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  previous() {
    const lastIndex = people.filter(person => person.profession.includes(this.props.data)).length - 1;
    const currentIndex = this.state.index;
    const index = currentIndex === 0 ? lastIndex : currentIndex - 1;
    this.setState({
      index: index,
    });
  }

  next() {
    const lastIndex = people.filter(person => person.profession.includes(this.props.data)).length - 1;
    const currentIndex = this.state.index;
    const index = currentIndex === lastIndex ? 0 : currentIndex + 1;
    this.setState({
      index: index,
    });
  }

  render() {
    const dataToDisplay = people.filter(person => person.profession.includes(this.props.data))[this.state.index];
    return (
      <div className='card professional-card col center'>
        <p>{this.props.data}</p>
        <p>Remoters, freelancers, employees</p>
        <img src='https://pngriver.com/wp-content/uploads/2018/04/Download-World-Map-PNG-Picture.png' alt='' />
        <div className="professional-carousel slider row justify-center">
          <div className="slider-btn btn-2 slider-left" onClick={this.previous}>⬅</div>
          <div className="slider-btn btn-2 slider-right" onClick={this.next}>➡</div>
          <div className='person-card row center'>
            <div className='professional-avatar'>
              <HexagonBorder image={dataToDisplay.avatar} />
            </div>
            <div className='professional-info col start'>
              <img src='https://img.freepik.com/free-vector/abstract-waves-design_1048-7600.jpg?size=626&ext=jpg' alt='' />
              <div className='row center'>
                <p>{dataToDisplay.name}</p>
                <Icon path={mdiCheckDecagram} title='Verified' size={0.6} color='#777'/>
                <Icon path={mdiWeight} title='Weight' size={0.6} color='#333' />
                <p>{dataToDisplay.upVotes}</p>
              </div>
              <p className='professional-description'>{trimStr(dataToDisplay.position, 25)}</p>
              <p className='row'>{trimStr(dataToDisplay.tag, 13)}<span>{dataToDisplay.tagVotes}</span></p>
            </div>
          </div>
        </div>
        <a href='#'>VIEW MORE</a>
      </div>
    );
  }
}

export default ProfessionalCard;
