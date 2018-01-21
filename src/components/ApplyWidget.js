import React from 'react';
const ReactMarkdown = require('react-markdown');

export default class ApplyWidget extends React.Component {
  render() {
    const {
      apply_types: applyTypes,
      apply_message: applyMessage
    } = this.props.data.allMarkdownRemark.edges[0].node.frontmatter;

    return (<div className="widget">
      <p>{applyMessage}</p>
      <div className="widget__container">
      {applyTypes.map((applyType) => {
        return (<div className="widget__block">
          <h2>{applyType.heading}
            <a href={applyType.linked_page}>Learn more &rarr;</a>
          </h2>
          <p>{applyType.description}</p>
          <div className="widget__table">
            <div className="widget__tablerow">
              <p>Infosessions for {applyType.heading}:</p>
              <p><ReactMarkdown source={applyType.infosession} /></p>
            </div>
            <div className="widget__tablerow">
              <p>Applications due:</p>
              <p>{new Date(applyType.apply_deadline).toLocaleDateString()}</p>
            </div>
          </div>
          <p>
            <a href={applyType.apply_link}>
              Submit your application for {applyType.heading} here 
            </a>
          </p>
        </div>);
      })}
      </div>
    </div>);
  }
}
