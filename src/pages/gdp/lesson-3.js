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
            <h1 className="section__title">Lesson Three</h1>
            <div className="button__wrapper">
              <a href="https://drive.google.com/drive/folders/1A4T5S2jSC6fM7c5wH57f30Y0O-EkZqvt">
                <button className="download__button">
                  download files
                </button>
              </a>
            </div>
            <div className="lesson__section">
              <div className="lesson__section--description left">
                <img src="../../img/decal/gdp/lesson3.png"/>
              </div>
              <div className="lesson__section--description right">
                <div className="lesson__section--subtitle">tutorial</div>
                <div className="lesson__section--info">
                  Using only circles and squares, illustrate 3 complex human emotions
                </div>
              </div>
            </div>
            <div className="lesson__section">
              <div className="lesson__section--description left">

              </div>
              <div className="lesson__section--description right">
                <div className="lesson__section--subtitle">homework</div>
                <div className="lesson__section--info">
                  Illustrate a dream you once had. Make three versions of this illustration, using three different palettes, to evoke different moods.
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
