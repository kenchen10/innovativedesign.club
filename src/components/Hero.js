import React from 'react';

export default class Hero extends React.Component {
  render() {
    const {
      hero_heading: heading,
      hero_subheading: subheading,
    } = this.props.data.markdownRemark.frontmatter;

    return (

      <div className="hero">
        <div className="hero__left">
          <h1>{heading}</h1>
          <p>{subheading}</p>
        </div>
        <div className="hero__right">
          {this.props.children}
        </div>
      </div>
      
    );
  }
}
