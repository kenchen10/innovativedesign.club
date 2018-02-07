import React from 'react';
import Img from 'gatsby-image';

export default class Officer extends React.Component {
  render() {
    const { info } = this.props;

    return (<div className="officer__block">
      <Img
        resolutions={this.props.image} 
      />
      <h3>{info.name}</h3>
      <p>{info.role}</p>
    </div>);
  }
}