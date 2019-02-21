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
              <a href="https://drive.google.com/drive/u/1/folders/1H0kUyVAzkZyS4o8qp0THJkQ2o3BWBmMx">
                <button className="download__button">
                  download files
                </button>
              </a>
            </div>
            <div className="lesson__section">
              <div className="lesson__section--description left">
                <img src="../../img/decal/lesson3.png"/>
              </div>
              <div className="lesson__section--description right">
                <div className="lesson__section--subtitle">tutorial</div>
                <div className="lesson__section--info">
                  Learn how to make blends and gradients in Illustrator and how to use these tools to create an original composition.
                </div>
              </div>
            </div>
            <div className="lesson__section">
              <div className="lesson__section--description left">
                <img src="../../img/decal/hw3.png"/>
              </div>
              <div className="lesson__section--description right">
                <div className="lesson__section--subtitle">homework</div>
                <div className="lesson__section--info">
                Create your own isometric illustration (can be a landscape, city, bedroom, object,
anything!) using the template on bCourses. To apply what you learned in the color
lesson, try to use gradients and blend tool when applicable. First create one version
of your illustration. Then, use SHIFT-O to create a new artboard and copy your
illustration onto it. Select the new illustration and use Edit > Edit Colors > Recolor
Artwork to apply a new color palette to your illustration. Your two illustrations can be
day and night versions of your artwork, or just two different color palettes. Have fun!
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
