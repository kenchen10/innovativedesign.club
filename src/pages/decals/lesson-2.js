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
            <h1 className="section__title">Lesson Two</h1>
            <div className="button__wrapper">
              <a href="https://drive.google.com/drive/u/1/folders/1F1s9Ttu-nOrlGa13gFYt9jMVjYCewnvo">
                <button className="download__button">
                  download files
                </button>
              </a>
            </div>
            <div className="lesson__section">
              <div className="lesson__section--description left">
                <img src="../../img/decal/lesson2.png"/>
              </div>
              <div className="lesson__section--description right">
                <div className="lesson__section--subtitle">tutorial</div>
                <div className="lesson__section--info">
                  Get your pop art on by using pen tool to create a graphic in Roy Lichtenstein's comic-book style. You'll be honing your skills with anchors and handles, and even playing with stroke width to get a Lichtenstein-like effect.
                </div>
              </div>
            </div>
            <div className="lesson__section">
              <div className="lesson__section--description left">
                <img src="../../img/decal/hw2.png"/>
              </div>
              <div className="lesson__section--description right">
                <div className="lesson__section--subtitle">homework</div>
                <div className="lesson__section--info">
                Find your favorite real or cartoon character. Copy (do not Place) it into an Illustrator file, and trace the outlines of the character and color it in. Have fun! Choose your favorite character and use what you've learned in class!
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
