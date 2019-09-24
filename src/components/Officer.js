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
      {info.secondary_role !== null ? <p>{info.role}</p> : <p className="last-child">{info.role}</p>}
      <p>{info.secondary_role}</p>
    </div>);
  }
}