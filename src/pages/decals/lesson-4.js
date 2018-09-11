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
            <h1 className="section__title">Lesson Four</h1>
            <div className="button__wrapper">
              <a href="https://drive.google.com/open?id=15NoijN_QVWqPA3MwCS4VF-8fhNBRhyXU">
                <button className="download__button">
                  download files
                </button>
              </a>
            </div>
            <div className="lesson__section">
              <div className="lesson__section--description left">
                <img src="../../img/decal/lesson4.png"/>
              </div>
              <div className="lesson__section--description right">
                <div className="lesson__section--subtitle">tutorial</div>
                <div className="lesson__section--info">
                  Learn how to make all different types of brushes and apply them in a fun poster series about New York City.
                </div>
              </div>
            </div>
            <div className="lesson__section">
              <div className="lesson__section--description left">
                <img src="../../img/decal/hw4.png"/>
              </div>
              <div className="lesson__section--description right">
                <div className="lesson__section--subtitle">homework</div>
                <div className="lesson__section--info">
                  Option 1 - low poly: create a low-poly art of any photograph — this can be a photograph of landscape, cityscape, animals, portraits, etc. For the sections that went over this topic, your facilitator should have showed you in class the steps on how to create low-poly art. 

                  Option 2 - If you missed the low poly lesson: Create a poster of your favorite landmark/location using the pen tool, brushes, symbols and effects! Create your own brush by first pen tooling a cool design and then transforming it into a brush like what you learned to create the New York posters. Then create a cool, patterned background using your new brush! 
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
