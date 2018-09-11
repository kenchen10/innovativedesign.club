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
            <h1 className="section__title">Lesson Seven</h1>
            <div className="button__wrapper">
              <a href="https://drive.google.com/open?id=1Jq67ub3UvJXjdQfudJZqKLfuK3u5kIvx">
                <button className="download__button">
                  download files
                </button>
              </a>
            </div>
            <div className="lesson__section">
              <div className="lesson__section--description left">
                <img src="../../img/decal/lesson7.png"/>
              </div>
              <div className="lesson__section--description right">
                <div className="lesson__section--subtitle">tutorial</div>
                <div className="lesson__section--info">
                  This week's lesson is all about selection tools and masks. You'll learn how to cut out parts of an image as well as hide parts of an image that you don't want to see. We'll be following the tutorial at bit.ly/lesson7tutorial and doing a group activity in class!
                </div>
              </div>
            </div>
            <div className="lesson__section">
              <div className="lesson__section--description left">
                <img src="../../img/decal/hw7.png"/>
              </div>
              <div className="lesson__section--description right">
                <div className="lesson__section--subtitle">homework</div>
                <div className="lesson__section--info">
                  Using the selection and masking tools from last week's lesson, create a surrealist photo by combining multiple images. The sea creatures in the wine bottle tutorial we did in class is a good example of manipulating the size and color of elements to create a surreal scene.
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
