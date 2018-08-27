import React from 'react';
import Img from 'gatsby-image';

export default class Officer extends React.Component {
  render() {
    const { info } = this.props;

    return (<div className="officer__block">
      <div className="officer__square">
        <Img
          resolutions={this.props.image}
        />
        <div className="officer__bio">
          <p>{info.hover_blurb}</p>
        </div>
      </div>
      <h3>{info.name}</h3>
      <p>{info.role}</p>
    </div>);
  }
}