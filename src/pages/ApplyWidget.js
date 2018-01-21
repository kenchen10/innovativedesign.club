import React from 'react';

export default class ApplyWidget extends React.Component {
  render() {
    const {
      apply_types: applyTypes,
      apply_message: applyMessage
    } = this.props.data.allMarkdownRemark.edges[0].node.frontmatter;

    return (<p>
      {applyMessage}
      <div style={{display: 'flex', flex: 1, flexDirection: 'row', width: '100%'}}>
      {applyTypes.map((applyType) => {
        return (<div style={{width: '50%'}}>
          <h2>{applyType.heading}&nbsp;
            <a href={applyType.linked_page}>Learn more</a>
          </h2>
          <p>{applyType.description}</p>
          <p>Infosessions for {applyType.heading}</p>
          <p>{applyType.infosession}</p>
          <p>Applications due:</p>
          <p>{new Date(applyType.apply_deadline).toLocaleDateString()}</p>
          <p>
            <a href={applyType.apply_link}>
              Submit your application for {applyType.heading} here 
            </a>
          </p>
        </div>);
      })}
      </div>
    </p>);
  }
}
