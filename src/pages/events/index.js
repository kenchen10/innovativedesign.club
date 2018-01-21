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
        <li className="event" data-date="January 24, 2018">
          <h3>Decal Infosession</h3>
          <h4 className="hidden__date">January 24, 8 & 8:30 PM @ 310 Jacobs</h4>
          <p>
            InnoD is back and ready for even more design education! 
            This semester, we will be offering our Intro to Photoshop and Illustrator, 
            Graphic Design Principles, and Photography Principles decals.
          </p>
          <p>
            Both sessions will have the same information about all three decals. 
            Due to safety regulations, we can only allow 130 people in 310 Jacobs at a time. 
            Please line up early for the 8:00 session because we cannot guarantee admission 
            when the room is full. You may be relegated to the 8:30 session.
          </p>
          <div className="button__wrapper">
            <a href="https://www.facebook.com/events/1195030613960379/" target="">
              <button className="info__button">rsvp</button>
            </a>
          </div>
        </li>
        <li className="event" data-date="January 31, 2018">
          <h3>Club Infosession</h3>
          <h4 className="hidden__date">January 31, 8 PM @ 10 Evans</h4>
          <p>
            COME and CREATE with Innovative Design, this Spring 2018! 
          </p>
          <p>
            We are UC Berkeley's student-run creative agency and a family of 
            multi-talented individuals. Come by our info session and see what we 
            have to offer and how YOU can join us and Make Berkeley Beautiful.
          </p>
          <p>
            We'll go over our teams for Graphic Designers, Photographers, and 
            Web Designers, the perks of joining, and the application process. 
            Applications will open at the end of the infosession, and they will be 
            due at the end of February 2nd!
          </p>
          <div className="button__wrapper">
            <a href="https://www.facebook.com/events/179037506180760/" target="">
              <button className="info__button">rsvp</button>
            </a>
          </div>
        </li>
        <li className="event" data-date="March 3, 2018">
          <h3>RGB - Information coming soon</h3>
          <h4 className="hidden__date">March 3 @ Jacobs</h4>
          {/*<div className="button__wrapper">
            <a href="" target="">
              <button className="info__button">rsvp</button>
            </a>
          </div>*/}
        </li>
        <li className="event" data-date="March 17-18, 2018">
          <h3>HEX - Information coming soon</h3>
          <h4 className="hidden__date">March 17-18 @ Wheeler 102</h4>
          {/*<div className="button__wrapper">
            <a href="" target="">
              <button className="info__button">rsvp</button>
            </a>
          </div>*/}
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
