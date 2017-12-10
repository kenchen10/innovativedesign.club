import React from 'react';
import DocumentTitle from 'react-document-title';

import $ from 'jquery';
import _ from 'lodash';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { }

  render () {
    const timeline = (
      <ul className="timeline">
        <li className="event" data-date="October 14, 2017">
          <h3>HEX: Hone and Explore - Weekend 1</h3>
          <h4 className="hidden__date">October 14, 2017</h4>
          <p>
            HEX: Hone and Explore is a workshop series where students come to learn and teach design. Workshops are taught by members and alumni of Innovative Design.
            They are free and open to ALL skill levels and Cal students! Come out to learn from and meet fellow design-minded students.
          </p>
          <div className="button__wrapper">
            <a href="" target="">
              <button className="info__button">rsvp</button>
            </a>
          </div>
        </li>
        <li className="event" data-date="October 21, 2017">
          <h3>HEX - Weekend 2</h3>
          <h4 className="hidden__date">October 21, 2017</h4>
          <div className="button__wrapper">
            <a href="" target="">
              <button className="info__button">rsvp</button>
            </a>
          </div>
        </li>
        <li className="event" data-date="October 28, 2017">
          <h3>HEX - Weekend 3</h3>
          <h4 className="hidden__date">October 28, 2017</h4>
          <div className="button__wrapper">
            <a href="" target="">
              <button className="info__button">rsvp</button>
            </a>
          </div>
        </li>
        <li className="event" data-date="November 4, 2017">
          <h3>CMYK</h3>
          <h4 className="hidden__date">November 4, 2017</h4>
          <p>
            Come Make Your marK on Saturday, November 4th for a day of learning and exciting competition with peers and professional designers!
          </p>
          <div className="button__wrapper">
            <a href="" target="">
              <button className="info__button">rsvp</button>
            </a>
          </div>
        </li>
      </ul>
    );

    return (
      <DocumentTitle title="Innovative Design">
        <div>
          <div className="page__wrapper events">
            <h1 className="section__title">upcoming events</h1>
            <div className="info">
              Here is the timeline for our public events this semester. 
              You can check back here or like our Facebook page for updates.
            </div>
            { timeline }
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
