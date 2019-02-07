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
              <a href="https://drive.google.com/drive/folders/11sQSgsK7tP39Cuw1NLjQUXbw52ien4ya?usp=sharing">
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
                  Learn how to create simple yet sleek icons using just basic shape tools in Illustrator
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
                  Using what you learned from the lesson and tutorial today, create three icons of your favorite foods!
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
