import React from 'react';
import DocumentTitle from 'react-document-title';

import $ from 'jquery';
import _ from 'lodash';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render () {
    return (
      <DocumentTitle title="Innovative Design">
        <div>
          <div className="page__wrapper lesson">
            <h1 className="section__title">Lesson One</h1>
            <div className="button__wrapper">
              <a href="https://www.dropbox.com/sh/m4zapmrav8fe1f2/AACU-j3WvcXxHOXD9T8wW4G0a?dl=0">
                <button className="download__button">
                  download files
                </button>
              </a>
            </div>
            <div className="lesson__section">
              <div className="lesson__section--description left">
                <img src="../../img/decal/lesson1.png"/>
              </div>
              <div className="lesson__section--description right">
                <div className="lesson__section--subtitle">tutorial</div>
                <div className="lesson__section--info">
                  Learn how to create a cool-looking abstract pattern which you can personalize with your own color choices and initials.
                </div>
              </div>
            </div>
            <div className="lesson__section">
              <div className="lesson__section--description left">
                <img src="../../img/decal/hw1.png"/>
              </div>
              <div className="lesson__section--description right">
                <div className="lesson__section--subtitle">homework</div>
                <div className="lesson__section--info">
                  This week's homework is to get you comfortable with finding your away around Illustrator on your own!
                  Follow the tutorial we did in class to make another cool pattern.
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
